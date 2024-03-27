import { useContext, useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import API_BASE_URL from "../../utils/apiConfig"
import { AuthContext } from "../../context/AuthContext"
import getConfigToken from "../../utils/getConfigToken"
import './Styles/ProfileUserStyles.css'

const ProfileUser = () => {

/*Solo si recibe la información de AuthContext (token y userId),
 hará la petición al useFetch*/
  const { token, userId } = useContext(AuthContext)
  const [ user, getUser ] = useFetch()
  
  useEffect(() => {
    const fetchData = async () => {
      if (token && userId){
        const url = `${API_BASE_URL}/users/${userId}`
        getUser(url, getConfigToken)
      }
    };
    fetchData();
  }, [token, userId])

  if(!token || !userId){
    return null// no renderiza si no hay token ni userId
  }

 
  return (
    <section>
      <div className="profile__user">
        <h4 className="profile__user-name">{user?.firstName}</h4>
      </div>
    </section>
  )
}

export default ProfileUser