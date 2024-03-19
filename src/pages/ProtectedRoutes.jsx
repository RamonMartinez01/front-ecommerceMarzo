import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes = () => {
 
  if(localStorage.getItem("token")) {
     return <Outlet />
  } else {
    return <Navigate to='/no-account'/>
  }

}

export default ProtectedRoutes