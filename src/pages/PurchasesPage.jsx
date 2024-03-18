import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import getConfigToken from '../utils/getConfigToken'
import PurchaseCard from "../components/PurchasesPage/PurchaseCard"
import API_BASE_URL from "../utils/apiConfig"
import './styles/PurchasesPage.css'

const PurchasesPage = () => {

    const [ purchases, getPurchases ] = useFetch()

    useEffect(() => {
        const url = `${API_BASE_URL}/purchases`
        getPurchases(url, getConfigToken())
    }, [])
    
    

  return (
    <div className="purchase__containter">
      <div className="purchase__title-div">
        <h2 className="purchase__title">Mis compras</h2>
      </div>
      <div className="purchase__card">
        {
            purchases?.map(infoPurchase => (
                <PurchaseCard 
                key={infoPurchase.id}
                purchase={infoPurchase}
                />
            ))
        }
      </div>
      <div className="purchase__footerdiv">
          <span className="purchase-greetings">Gracias!</span>
        </div>
    </div>
  )
}

export default PurchasesPage