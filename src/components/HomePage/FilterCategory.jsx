import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch"
import API_BASE_URL from "../../utils/apiConfig";
import './styles/FilterCategoryStyles.css'

const FilterCategory = ({ setCategorySelected }) => {

  const [ categories, getCategories ] = useFetch()
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const url = `${API_BASE_URL}/categories`
    getCategories(url)
  }, []);

    const toggleList = () => {
    setShowList(!showList);
  };

  /*Gestiona el onClick en los <li> de categories y los relaciona 
  con la lista renderizada en HomePage gracias a la prop setCategorySelected  */
  const handleCategory = id => {
    setCategorySelected(id)
  }

    //console.log(setCategorySelected);
  return (
    <section className="filter__ctg-section">
      <div className="filter__ctg-div" onClick={toggleList}>
        <h3 className="filter__ctg-title">¿Buscas alguna categoría?</h3>
        <span><i className='bx bx-chevron-down'></i></span>
      </div>
      <ul className={`filter__ctg-ul ${showList ? 'show' : ''}`}>
        <li className="filter__ctg-li" onClick={() => handleCategory('all')}>Todas las categorías</li>
        {categories?.map((category) => (
          <li className="filter__ctg-li"  onClick={() => handleCategory(category.id)} key={category.id}>{category.name}</li>
        ))}
      </ul>
    </section>
  )
}

export default FilterCategory