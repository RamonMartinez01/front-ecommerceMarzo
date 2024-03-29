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
                    <span>Nombre</span>
                    <input {...register('firstName', { required: true })} type="text" />
                    {errors.firstName && <span className="span__error">This field is required</span>}
                </label>
                <label>
                    <span>Apellido</span>
                    <input {...register('lastName', { required: true })} type="text" />
                    {errors.lastName && <span className="span__error">This field is required</span>}
                </label>
                <label>
                    <span>Correo</span>
                    <input {...register('email', { required: true })} type="text" />
                    {errors.email && <span className="span__error">This field is required</span>}
                </label>
                <label>
                    <span>Contraseña</span>
                    <input {...register('password', { required: true })} type="password" />
                    {errors.password && <span className="span__error">This field is required</span>}
                </label>
                <label>
                    <span>Teléfono</span>
                    <input {...register('phone', { required: true })} type="text" />
                    {errors.phone && <span className="span__error">This field is required</span>}
                </label>
                <button type="submit" className="formregister__btn">Registrarse</button>
                <span className="formregister__btn-span">Ya tienes una cuenta?</span>
                <button type="button" className="formregister__btn-login" onClick={goToLogin}>Acceder a mi cuenta!</button> 
            </form>
           
        </section>
    )
}

export default FormRegister