import axios from "axios"

const useAuth = () => {

    const registerUser = (user) => {
        const url = 'http://localhost:8080/users'
        axios.post(url, user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    const loginUser = (credentials) => {
        const url = 'http://localhost:8080/users/login'
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