import FormRegister from "../components/RegisterPage/FormRegister"

const RegisterPage = ({ toggleRegisterPage, toggleLoginPage  }) => {
  return (
    <div className="formregister__container">
      <FormRegister 
        toggleRegisterPage={toggleRegisterPage}
        toggleLoginPage={toggleLoginPage}
      />
    </div>
  )
}

export default RegisterPage