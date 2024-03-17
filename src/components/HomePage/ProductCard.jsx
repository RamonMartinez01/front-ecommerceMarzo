import { useNavigate } from "react-router-dom"
import { addProductToCartThunk } from "../../store/slices/cart.slice"
import { useDispatch } from "react-redux"
import './styles/ProductCard.css'

const ProductCard = ({ product }) => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/product/${product.id}`)
  }

  const dispatch = useDispatch()

  const handleAddToCart = e => {
    e.stopPropagation()
    dispatch(addProductToCartThunk(product.id, 1))
  }

 //console.log(product);
  return (
    <article className="product" onClick={handleNavigate}>
      <header className="product__header">

        <img className="product__img product__img01" src={product?.imageUrl} alt="" />
        <img className="product__img product__img02" src={product?.imageUrl2} alt="" />
      </header>
      <section className="product__body">
        <h4 className="product__brand">{product?.brand}</h4>
        <h3 className="product__name">{product?.title}</h3>

        <div className="product__price">
          <span className="product__price__label">Precio</span>
          <span className="product__price__value">{product?.price}</span>
        </div>
        <button className="product__btn" onClick={handleAddToCart}>
          <i className='bx bxs-cart'></i>
        </button>
      </section>
    </article>
  )
}

export default ProductCard