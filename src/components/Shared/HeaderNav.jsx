import { Link } from "react-router-dom"
import './Styles/HeaderNavStyles.css'
import { useState } from "react";
import ProfileUser from "./ProfileUser.jsx" 


const HeaderNav = ({ toggleRegisterPage, toggleLoginPage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleRegisterClick = () => {
    toggleRegisterPage();
    setIsDropdownOpen(false); // Close dropdown when Register is clicked
  };

  const handleLoginClick = () => {
    
    toggleLoginPage();
  }

  return (
    <section>
      <header className="header__nav">
        <h1 className="header__title"><Link to='/'>e-commerce</Link></h1>
        <ul className="header__menu-ul">
          <li className="header__menu-li"><button onClick={handleRegisterClick}>Register</button></li>
          <li className="header__menu-li"><button onClick={handleLoginClick}>Login</button></li>
          <li className="header__menu-li"><Link to='/cart'>Carrito</Link></li>
          <li className="header__menu-li"><Link to='/purchases'>Mis Compras</Link></li>
        </ul>
        <div>
            <ProfileUser />
        </div>
      </header>

      <header className="header__nav-query">
        <h1 className="header__title"><Link to='/'>e-commerce</Link></h1>
        <div className="header__actions">
          <div className="header__cart"><Link to='/cart'><i className='bx bx-cart' ></i></Link></div>
          <button className="header__dropdown-btn" onClick={toggleDropdown}><i className='bx bx-menu' ></i></button>
          
          <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
            <ul className="dropdown-menu">
              <li className="menu-li-dropdown register"><button onClick={handleRegisterClick}>Register</button></li>
              <li className="menu-li-dropdown login"><button onClick={handleLoginClick}>Login</button></li>
              <li className="menu-li-dropdown purchases"><Link to='/purchases'>Mis Compras</Link></li>
            </ul>
          </div>
          <div className="profile__user-container">
              <ProfileUser />
          </div>
        </div>
      </header>
    </section>
  )
}

export default HeaderNav