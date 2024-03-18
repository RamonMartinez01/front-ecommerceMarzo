import { useDispatch, useSelector } from "react-redux"
import { getCartThunk, setCart } from "../store/slices/cart.slice"
import { useEffect } from "react"
import CartProduct from "../components/ProductCartPage/CartProduct"
import getConfigToken from "../utils/getConfigToken"
import axios from "axios"
import API_BASE_URL from "../utils/apiConfig"
import './styles/CartProductPage.css'

const ProductCartPage = () => {

    const cart = useSelector(store => store.cart)

    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(getCartThunk())
    }, []) 
    
      const totalPriceCart = cart.reduce((acc, cv) => {
      const price = Number(cv.product.price) 
      return acc + price * cv.quantity
    }, 0)

    const handlePurchase = () => {
      const url = `${API_BASE_URL}/purchases`
      axios.post(url, '', getConfigToken())
        .then(res => {
          console.log(res.data)
          dispatch(setCart([]))
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="cart__product__container">
      <h1 className="cart__product__title">Mi Carrito</h1>
      <div className="cart__product__card">
        {
          cart.map(prod => (
            <CartProduct 
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
      <hr className="cart__product__hr1"/>
      <footer className="cart__product__footer">
        <div className="cart__product__total"> 
          <span className="cart__product__total-total">Total:</span>
          <span className="cart__product__total-price">{totalPriceCart}</span>
        </div>
        <button className="cart__product__buy" onClick={handlePurchase}>Comprar</button>
        <div className="cart__product__footerdiv">
          <span className="cart__product-greetings">e-commerce</span>
        </div>
      </footer>
    </div>
  )
}

export default ProductCartPage