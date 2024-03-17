import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import './styles/FormRegister.css'

const FormRegister = () => {

    const { register, handleSubmit, reset } = useForm()

    const { registerUser } = useAuth() 
    const navigate = useNavigate()

    const submit = data => {
        registerUser(data) 
        navigate('/login');
       
    }

    const goToLogin = () => { 
        navigate('/login'); // Navigate to login page
    }


    return (
        <section className="formpage__modal">
            <span></span>
            <form className="formpage__form" onSubmit={handleSubmit(submit)}>
                <label >
                    <span>First Name </span>
                    <input {...register('firstName')} type="text" />
                </label>
                <label>
                    <span>Last Name </span>
                    <input {...register('lastName')} type="text" />
                </label>
                <label>
                    <span>Email </span>
                    <input {...register('email')} type="text" />
                </label>
                <label>
                    <span>Password </span>
                    <input {...register('password')} type="text" />
                </label>
                <label>
                    <span>Phone </span>
                    <input {...register('phone')} type="text" />
                </label>
                <button className="formregister__btn">Rregister</button>
                <span className="formregister__btn-span">Ya tienes una cuenta?</span>
                <button className="formregister__btn-login" onClick={goToLogin}> Then log in!</button> 
            </form>
           
        </section>
    )
}

export default FormRegister