import { useContext, useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import API_BASE_URL from "../../utils/apiConfig"
import { AuthContext } from "../../context/AuthContext"
import getConfigToken from "../../utils/getConfigToken"
import './Styles/ProfileUserStyles.css'

const ProfileUser = () => {

  const { token, userId } = useContext(AuthContext)
  const [ user, getUser ] = useFetch()
  
  useEffect(() => {
    if (token && userId){
      const url = `${API_BASE_URL}/users/${userId}`
      getUser(url, getConfigToken)
      }
  }, [token, userId])

  console.log(user);
  return (
    <section>
      <div className="profile__user">
        <h4 className="profile__user-name">{user?.firstName}</h4>
      </div>
    </section>
  )
}

export default ProfileUser