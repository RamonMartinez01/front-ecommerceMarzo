import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProductsThunk } from "../../store/slices/products.slice"
import ProductCard from "../HomePage/ProductCard"
import './styles/SimilarProduct.css'


const SimilarProduct = ({ categoryId, idProd }) => {

  const products = useSelector( store => store.products )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  const filteredProducts = products?.filter(product => product.categoryId === categoryId);


if (!products) {
  return <div>Loading...</div>;
}
 console.log(filteredProducts);
  return (
    <article>
        <h2>Similar products</h2>
        
        <div className="product-container">    
              {filteredProducts.filter((prod) => prod.id !== idProd).map(product => (
                  <ProductCard 
                      key={product.id}
                      product={product}
                  />
              ))}
            </div>
    </article>
  )
}

export default SimilarProduct
