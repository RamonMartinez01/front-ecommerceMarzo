import { useParams } from "react-router-dom"
import ProductInfo from "../components/ProductIdPage/ProductInfo"
import ProductCard from "../components/HomePage/ProductCard"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import SliderImgs from "../components/ProductIdPage/SliderImgs"
//import SimilarProduct from "../components/ProductIdPage/SimilarProduct"
import '../components/ProductIdPage/styles/ProductIdP.css'



const ProductIdPage = () => {
  const { id } = useParams()

  const [ prod, getProduct ] = useFetch()

 useEffect(() => {
  const url = `http://localhost:8080/products/${id}`
  getProduct(url)
 }, [id])

 const [ products, getProducts ] = useFetch()

 useEffect(() => {
  const url = `http://localhost:8080/products`
  getProducts(url)
 }, [id])


 
const filteredProducts = products?.filter(product => product.id !== id);

//console.log(filteredProducts);
  return (
    <div className="productinfo__container">
      <section>
        <SliderImgs prod={prod} />
        <ProductInfo 
          product={prod}
        />
      </section>
      <h2 className="productInfo-h2">Mas Productos Similares</h2>
      <section className="productInfo__productsCard">
      
      
        {filteredProducts?.map((product) => (
              <ProductCard 
              key={product.id}
              product={product} />
        ))}

         {/* {
            <SimilarProduct 
            categoryId={product?.category.id} 
            idProd={product?.id}
         />}*/}
      </section>
    </div>
  )
}

export default ProductIdPage