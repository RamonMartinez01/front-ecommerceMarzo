import FormLogin from "../components/LoginPage/FormLogin"

const LoginPage = ({ toggleLoginPage }) => {
  return (
    <div>
      <FormLogin toggleLoginPage={toggleLoginPage}/>
    </div>
  )
}

export default LoginPage