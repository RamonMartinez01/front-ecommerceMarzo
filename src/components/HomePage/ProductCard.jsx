import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { addProductToCartThunk } from "../../store/slices/cart.slice"
import { useDispatch } from "react-redux"
import './styles/ProductCard.css'


const ProductCard = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleNavigate = () => {
    navigate(`/product/${product.id}`)
  }

  const handleAddToCart = e => {
    e.stopPropagation()
    const token = localStorage.getItem('token')
    if(token) {
      dispatch(addProductToCartThunk(product.id, 1));
    } else {
      navigate('/no-account')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = productRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the product element is in the viewport
      if (top < windowHeight && bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const productRef = useRef(null);
console.log(product?.images);

   return (
    <article className={`product ${isVisible ? 'visible' : ''}`}
      ref={productRef}
      onClick={handleNavigate}
    >
      <header className="product__header">

        <img className="product__img product__img01" src={product?.images[0].url} alt="" />
        <img className="product__img product__img02" src={product?.images[1].url} alt="" />
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