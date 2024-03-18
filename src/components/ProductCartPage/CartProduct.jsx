import { useDispatch } from "react-redux";
import { deleteProductFromCartThunk } from "../../store/slices/cart.slice";
import './styles/CartProduct.css'

const CartProduct = ({ prod }) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
      dispatch(deleteProductFromCartThunk(prod.id))
  }

   // console.log(prod.quanti); 
  return (
    
   <section className="prod__container">
      <header className="prod__header">
        <img className="prod__img" src={prod.product.images[0].url} alt="" />
      </header>
      <article className="prod__article">
        <div className="prod__title-div">
          <h3 className="prod__title">{prod.product.title}</h3>
          <span className="prod__quantity">{prod.quantity}</span>
        </div>
        <div className="prod__price-div">
            <span className="prod__price-title">Precio</span>
            <span className="prod__price-media">{prod.product.price}</span>
        </div>
      </article>
      <button className="prod__delete-btn" onClick={handleDelete}>
        <i className='bx bx-trash'></i>
      </button>
   </section>

  )
}

export default CartProduct
