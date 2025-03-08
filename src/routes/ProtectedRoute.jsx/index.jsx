import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedRoute ({children}) {

    const isLogin = localStorage.getItem('user')
    
    console.log(isLogin)

    if (isLogin === null) {
        return <Navigate to={'/login'}/>
    }


    return <>{children || <Outlet /> }</>
}