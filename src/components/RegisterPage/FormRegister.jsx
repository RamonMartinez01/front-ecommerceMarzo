import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import './styles/FormRegister.css'

const FormRegister = ({ toggleRegisterPage, toggleLoginPage }) => {

    const { register, handleSubmit, reset, formState: {errors} } = useForm()

    const { registerUser } = useAuth() 
    const navigate = useNavigate()

    const submit = data => {
        registerUser(data) 
        toggleRegisterPage()
        toggleLoginPage()
    }

    const goToLogin = () => { 
        toggleRegisterPage()
        toggleLoginPage()
       
    }

    const handleClose = () => {
        toggleRegisterPage(); // Close the RegisterPage without registering
    };


    return (
        <section className="formpage__modal">
           <span className="close-formpage-btn">
                <button onClick={handleClose}><i className='bx bx-x'></i></button>
            </span>
            <form className="formpage__form" onSubmit={handleSubmit(submit)}>
                <label >
                    <span>First Name </span>
                    <input {...register('firstName')} type="text" />
                    {errors.firstName && <span>This field is required</span>}
                </label>
                <label>
                    <span>Last Name </span>
                    <input {...register('lastName')} type="text" />
                    {errors.lastName && <span>This field is required</span>}
                </label>
                <label>
                    <span>Email </span>
                    <input {...register('email')} type="text" />
                    {errors.email && <span>This field is required</span>}
                </label>
                <label>
                    <span>Password </span>
                    <input {...register('password')} type="text" />
                    {errors.password && <span>This field is required</span>}
                </label>
                <label>
                    <span>Phone </span>
                    <input {...register('phone')} type="text" />
                    {errors.phone && <span>This field is required</span>}
                </label>
                <button className="formregister__btn">Rregister</button>
                <span className="formregister__btn-span">Ya tienes una cuenta?</span>
                <button className="formregister__btn-login" onClick={goToLogin}> Then log in!</button> 
            </form>
           
        </section>
    )
}

export default FormRegister