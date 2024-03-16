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

function App() {


  return (
   <div>
      <HeaderNav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<ProductIdPage />} />
        <Route path='/register' element={<RegisterPage />} />
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
