import { Navigate, Outlet } from "react-router-dom"
import RegisterPage from "./RegisterPage"

const ProtectedRoutes = () => {
 
  if(localStorage.getItem("token")) {
     return <Outlet />
  } else {
    return <Navigate to='/login'/>
  }

}

export default ProtectedRoutes