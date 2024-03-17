import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"
import './styles/FormLogin.css'

const FormLogin = () => {

  const { register, handleSubmit, reset } =useForm()
        //loginUser
  const { loginUser } = useAuth()

  const submit = (data) => {
      loginUser(data)
  }

  return (
    <section className="formlogin__modal">
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