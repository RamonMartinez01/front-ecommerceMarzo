import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductIdPage from './pages/ProductIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HeaderNav from './components/Shared/HeaderNav'
import ProductCartPage from './pages/ProductCartPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PurchasesPage from './pages/PurchasesPage'

import { useState } from 'react';
import FormRegister from './components/RegisterPage/FormRegister';
import FormLogin from './components/LoginPage/FormLogin';

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleRegister = () => {
    setShowRegister(!showRegister);
     // Hide register form if login form is shown
  };
  
  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowRegister(false); // Hide register form if login form is shown
  };

  const closeRegister = () => {
    setShowRegister(false);
  };
  
  return (
   <div>
      <HeaderNav 
        showRegister={showRegister} 
        showLogin={showLogin} 
        toggleRegister={toggleRegister} 
        toggleLogin={toggleLogin} 
        closeRegister={closeRegister} 
      />
      {showRegister && <FormRegister />}
      {showLogin && <FormLogin />}
      

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<ProductIdPage />} />
        <Route path='/register'  element={<RegisterPage  toggleRegister={toggleRegister} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<ProductCartPage />} />
          <Route path='/purchases' element={<PurchasesPage />} />
        </Route>
      </Routes>
   </div>
  )
}

export default App
