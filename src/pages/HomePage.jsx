import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice';
import { useEffect, useRef, useState } from 'react';
import ProductCard from '../components/HomePage/ProductCard';
import FilterCategory from '../components/HomePage/FilterCategory'
import FilterPrice from '../components/HomePage/FilterPrice';
import './styles/HomePage.css'


const HomePage = () => {

  const [nameValue, setNameValue] = useState('') //Almacena el valor del useRef

  //Gestiona el valor del onClick que se crea en el componente FilterCategory 
  const [categorySelected, setCategorySelected] = useState('all')

  const [priceRange, setPriceRange] = useState({
    from: 0,
    to: Infinity,
  })

  const products = useSelector(store => store.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  const inputName = useRef()//crea una referencia del valor que tiene el input en el virtual DOM

  const handleInputName = () => {
    setNameValue(inputName.current.value.toLowerCase().trim())
  }

  const handleSearch = () => {
    setNameValue(inputName.current.value.toLowerCase().trim());
  };

  const callbackFilter = prod => {//filtra los productos de acuerdo a su relacion con el valor que viene del input
    //filtrado por nombre
    const filterName = prod.title.toLowerCase().includes(nameValue)
    //filtrado por categoria
    const filterCategory = categorySelected === 'all' ? true : categorySelected === prod.category.id;
    // filtrado por precio 
    const priceProduct = +prod.price;
    const filterPrice = priceRange.from <= priceProduct && priceProduct <= priceRange.to;
    return filterName && filterCategory && filterPrice;
  }
  //console.log(products);

   return (
    <div>
      <div className='home__container'>
        <div className='div__input-home'>
          <input className='input-home' ref={inputName} onChange={handleInputName} type="text" />
          <span className='home-search' onClick={handleSearch}><i className='bx bx-search-alt-2'></i></span>`
        </div>
        <div className='home__filter'>
          <h2 className='home__filter'><i className='bx bx-filter-alt' ></i></h2>
          <FilterPrice setPriceRange={setPriceRange} />
          <FilterCategory setCategorySelected={setCategorySelected} />
        </div>
        <div className='product-container'>
          {
            products?.filter(callbackFilter).map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
              />
            ))
          }
        </div>
      
      </div>
    </div>
  )
}

export default HomePage