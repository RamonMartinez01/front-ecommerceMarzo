import axios from "axios"
import API_BASE_URL from "../utils/apiConfig"

const useAuth = () => {

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
                localStorage.setItem('token', res.data.token)
            })
            .catch(err => console.log(err))
    }

    return { registerUser, loginUser }
}

export default useAuth