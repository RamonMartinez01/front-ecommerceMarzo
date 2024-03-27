import { Route, Routes, useLocation } from 'react-router-dom'
import { useState } from "react"
import './App.css'
import HomePage from './pages/HomePage'
import ProductIdPage from './pages/ProductIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HeaderNav from './components/Shared/HeaderNav'
import ProductCartPage from './pages/ProductCartPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PurchasesPage from './pages/PurchasesPage'
import NoAccountPage from './pages/NoAccountPage'


function App() {
const [showRegisterPage, setShowRegisterPage] = useState(false) 
const [showLoginPage, setShowLoginPage] = useState(false);
const location = useLocation();
  
// Function to toggle the visibility of the RegisterPage
const toggleRegisterPage = () => {
  setShowRegisterPage(!showRegisterPage);
};

const toggleLoginPage = () => {
  setShowLoginPage(!showLoginPage);
};

 // Hide the RegisterPage when navigating away
 const handleNavigate = () => {
  setShowRegisterPage(false);
};
  return (
   <div>
      <HeaderNav
       toggleRegisterPage={toggleRegisterPage}
       toggleLoginPage={toggleLoginPage}
       />
       {showRegisterPage && (
          <RegisterPage
          toggleRegisterPage={toggleRegisterPage} 
          toggleLoginPage={toggleLoginPage}
          />
        )}
       {showLoginPage && (
          <LoginPage toggleLoginPage={toggleLoginPage} />
        )}
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/no-account' element={<NoAccountPage
         toggleRegisterPage={toggleRegisterPage} 
         toggleLoginPage={toggleLoginPage} />} />
        <Route path='/product/:id' element={<ProductIdPage />} /> 
        
        <Route element={<ProtectedRoutes />}>
         <Route path='/cart' element={<ProductCartPage />} />
         <Route path='/purchases' element={<PurchasesPage />} />
          
        </Route>
      </Routes>
   </div>
  )
}

export default App
