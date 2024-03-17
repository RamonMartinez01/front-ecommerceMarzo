import { Link } from "react-router-dom"
import './Styles/HeaderNavStyles.css'
import { useState } from "react";

const HeaderNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <section>
      <header className="header__nav">
        <h1 className="header__title"><Link to='/'>e-commerce</Link></h1>
        <ul className="header__menu-ul">
          <li className="header__menu-li"><Link to='/register'>Register</Link></li>
          <li className="header__menu-li"><Link to='/login'>Log in</Link></li>
          <li className="header__menu-li"><Link to='/cart'>Carrito</Link></li>
          <li className="header__menu-li"><Link to='/purchases'>Mis Compras</Link></li>
        </ul>
      </header>

      <header className="header__nav-query">
        <h1 className="header__title"><Link to='/'>e-commerce</Link></h1>
        <div className="header__actions">
          <div className="header__cart"><Link to='/cart'><i className='bx bx-cart' ></i></Link></div>
          <button className="header__dropdown-btn" onClick={toggleDropdown}><i className='bx bx-menu' ></i></button>
          <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
            <ul className="dropdown-menu">
              <li className="menu-li-dropdown"><Link to='/register'>Register</Link></li>
              <li className="menu-li-dropdown"><Link to='/login'>Log in</Link></li>
              <li className="menu-li-dropdown"><Link to='/purchases'>Mis Compras</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </section>
  )
}

export default HeaderNav