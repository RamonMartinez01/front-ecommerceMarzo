
const PurchaseCard = ({ purchase }) => {


  return (
    <article>
        <header>
            <img src={purchase.product.images[0].url} alt="" />
        </header>
        <h3>{purchase.product.title}</h3>
        <span>{purchase.quantity}</span>
        <div>{purchase.product.price}</div>
    </article>
  )
}

export default PurchaseCard