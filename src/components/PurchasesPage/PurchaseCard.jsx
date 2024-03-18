import './styles/PurchaseCard.css'

const PurchaseCard = ({ purchase }) => {


  return (
    <article className='purchasescard__container'>
        <header className='purchasescard__header'>
            <img className='purchasescard__img' src={purchase.product.images[0].url} alt="" />
        </header>
        <div className='purchasescard__info'>
          <h3 className='purchasescard__h3'>{purchase.product.title}</h3>
          <div className='purchasecard__price-div'>
            <span className='purchasescard__quantity'>{purchase.quantity}</span>
            <div className='purchasescard__price'>{purchase.product.price}</div>
          </div>
        </div>
    </article>
  )
}

export default PurchaseCard