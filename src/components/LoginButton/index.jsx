// import { Navigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "./LoginButton.css"

export default function LoginButton ({setRegisterFalse}) {

    return ( <Link to="/login" className="login-button"><button className="login" onClick={setRegisterFalse}>  Login </button> </Link>)

}