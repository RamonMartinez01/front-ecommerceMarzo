import { useState } from "react"
import { addProductToCartThunk } from "../../store/slices/cart.slice"
import { useDispatch } from "react-redux"
import './styles/ProductInfo.css'

const ProductInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1)

    const handleMinus = () => {
        if(quantity - 1 >= 1) {
            setQuantity(quantity - 1)
         }
    }

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }
    
    const dispatch = useDispatch()
    const handleAddToCart = () =>{
        dispatch(addProductToCartThunk(product.id, quantity))
    }

  return (
    <article className="productInfo__container">
        
        <h2 className="productInfo__title">{product?.title}</h2>
        <h3 className="productInfo__brand">{product?.brand}</h3>
        <p className="productInfo__description">{product?.description}</p>
        <footer className="productInfo__footer">
            <div className="productInfo__subtotal">
                <span>Precio</span>
                <span>{product?.price}</span>
            </div>
            <div className="productInfo__counter">
                <button className="productInfo__counter-minus" onClick={handleMinus}><i className='bx bx-minus' ></i></button>
                <div className="productInfo__counter-quantity">{quantity}</div>
                <button className="productInfo__counter-plus" onClick={handlePlus}><i className='bx bx-plus'></i></button>
            </div>
            <button className="productInfo__btn-addtocart" onClick={handleAddToCart}>Add to cart</button>
        </footer>
    </article>
  )
}

export default ProductInfo