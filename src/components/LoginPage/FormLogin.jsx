import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"
import './styles/FormLogin.css'

const FormLogin = ({ toggleLoginPage }) => {

  const { register, handleSubmit, reset } = useForm()

  const { loginUser } = useAuth()

  const submit = (data) => {
    toggleLoginPage()
    loginUser(data)
  };
  const handleClose = () => {
    toggleLoginPage(); // Close the login form
  };

  return (

      <section className="formlogin__modal">
        <span onClick={handleClose} className="close-formlogin-btn">
          <button ><i className='bx bx-x'></i></button>
        </span>
        <form className="formlogin__form" onSubmit={handleSubmit(submit)}>
          <label >
            <span>Email </span>
            <input {...register('email')} type="text" />
          </label>
          <label >
            <span>Password </span>
            <input {...register('password')} type="text" />
          </label>
          <button className="formlogin__btn ">Login</button>
        </form>
      </section>
    )
}

export default FormLogin