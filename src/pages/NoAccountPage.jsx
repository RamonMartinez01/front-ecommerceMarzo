import { useNavigate } from 'react-router-dom'
import './styles/NoAccountPage.css'

const NoAccountPage = ({  toggleRegisterPage, toggleLoginPage }) => {

    const navigate = useNavigate()
    const handleClose = () => {
        navigate('/')
    }

    return (
        <section className="noaccount__modal">
             <span className="close-noaccount-btn">
                <button onClick={handleClose}><i className='bx bx-x'></i></button>
            </span>
            <article className="noaccount__article">
                <div className="noaccount__title">
                    <h1 className="noaccount__title-1">Oops!</h1>
                    <p className="noaccount__title-p">Debes <br /> <strong>acceder a tu cuenta</strong> <br />antes de ir a tu carrito de compras!</p>
                </div>
                <div className="noaccount__btns">
                <button className="noaccount__btn-regiser" onClick={() => {
                        toggleRegisterPage(); // Call toggleRegisterPage function
                        handleClose(); // Close NoAccountPage component
                    }}>Registrarme</button>
                    <button className="noaccount__btn-login" onClick={() => {
                        toggleLoginPage();
                        handleClose();
                    }}>Acceder!</button>
                </div>
            </article>
           
        </section>
    )
}

export default NoAccountPage