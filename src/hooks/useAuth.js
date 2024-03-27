import axios from "axios"
import API_BASE_URL from "../utils/apiConfig"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const useAuth = () => {
    const { setToken, setUserId } = useContext(AuthContext)

    const registerUser = (user) => {
        const url = `${API_BASE_URL}/users`
        axios.post(url, user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    const loginUser = (credentials) => {
        const url = `${API_BASE_URL}/users/login`
        axios.post(url, credentials)
            .then(res => {
                console.log(res.data)
                setToken(res.data.token) //Captura (pero no almacena) token
                setUserId(res.data.user.id)//Captura (pero no almacena)Id
                //localStorage.setItem('token', res.data.token)
                //localStorage.setItem('userId', res.data.user.id )
            })
      
            .catch(err => console.log(err))
    }

    return { registerUser, loginUser }
}

export default useAuth