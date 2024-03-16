import { useDispatch, useSelector } from "react-redux"
import { getCartThunk, setCart } from "../store/slices/cart.slice"
import { useEffect } from "react"
import CartProduct from "../components/ProductCartPage/CartProduct"
import getConfigToken from "../utils/getConfigToken"
import axios from "axios"

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
      const url = 'http://localhost:8080/purchases'
      axios.post(url, '', getConfigToken())
        .then(res => {
          console.log(res.data)
          dispatch(setCart([]))
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {
          cart.map(prod => (
            <CartProduct 
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
      <hr />
      <footer>
        <span>Total:</span>
        <span>{totalPriceCart}</span>
        <button onClick={handlePurchase}>Comprar</button>
      </footer>
    </div>
  )
}

export default ProductCartPage