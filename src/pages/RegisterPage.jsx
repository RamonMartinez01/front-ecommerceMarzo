import FormRegister from "../components/RegisterPage/FormRegister"

const RegisterPage = ({ toggleRegister, toggleLogin, closeRegister }) => {
  return (
    <div className="formregister__container">
      <FormRegister 
       toggleRegister={toggleRegister} 
       toggleLogin={toggleLogin} 
       closeRegister={closeRegister} 
      />
    </div>
  )
}

export default RegisterPage