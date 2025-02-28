


import google from "../../assets/login-icon/google.png"
import facebook from "../../assets/login-icon/facebook.png"
import logo from "../../assets/nav-logo/logo.png"
import back from "../../assets/login-icon/back.png"

import "./loginPage.css"
import LoginForm from "../../components/LoginForm"
import Register from "../../components/RegisterForm"

import { Link } from "react-router-dom"

export default function LoginPage ({register, handleRegisterPage}) {

    return (
        <div className="login-page">


            <Link to="/" ><img src={back} alt="back" className="back" style={{ position:'absolute', width:'44px', zIndex: '30', top: '20px', left: '20px' }} /></Link>


            <div className="container-login">

                <div className="img">
                    <img src={logo} alt="logo" className="logo" />
                </div>

                {
                    // if false 
                    register ? 
                    <Register handleRegisterPage = {handleRegisterPage} /> : 
                    <LoginForm google={google} facebook={facebook} handleRegisterPage = {handleRegisterPage} />  
                }

            </div>
            
        </div>
    )
}