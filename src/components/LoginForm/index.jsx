import { useState } from "react"
import useLogin from "../../hooks/useLogin"
import "./loginForm.css"
import { useNavigate } from "react-router-dom"
import Loading from "../Loading"
import { Alert } from "antd"



export default function LoginForm ({google, facebook, handleRegisterPage}) {

    const {login, user, loading, error, isError} = useLogin()

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // console.log(user)
    // console.log(error)
    // console.log(isError)
    // console.log(loading)
    
    const cekUser = () => {
        setTimeout(() => {
            const user = localStorage.getItem('user')
            const isUser = JSON.parse(user)

            if(isUser) {
                navigate('/')
            }
        }, 5000)
    }

    cekUser()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
        cekUser()
    }

    return (
        <form onSubmit={handleSubmit} className="login">
            <h3><span style={{ color: '#53599A' }}>Welcome</span> <br /> and See Our <span style={{ color: '#53599A' }}> Teams </span></h3>

            <div className="email">
                <label htmlFor="" id="email">Email</label>
                <input type="email" width={100} placeholder="example@gmail.com" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="password" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="" id="password">Password</label>
                <input type="password" width={100} placeholder="your password here" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            
            {/* {error && <small className="error">{error}</small>} */}
            {/* {!isError && isError !== null &&  <Alert message={"Login Success!"} type="success" showIcon /> }
            {isError && <Alert message={error} type="error" showIcon /> } */}

            {error && <Alert message = {error} type = {isError ? "error" : "success" } showIcon />}
            

            <button type="submit" disabled={loading} className="login">{loading ? <Loading />  : "Login"   }</button>

            <a className="toregister" onClick={handleRegisterPage}>{"Don't"} have an account?</a>

            <div className="regist-socmed">
                <img src={google} alt="google-icon" className="google" />
                <p>or</p>
                <img src={facebook} alt="facebook-icon" className="facebook" />
            </div>

        </form>
    )
}