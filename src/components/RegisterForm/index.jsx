import { useState } from "react"
import "./register.css"
import useRegister from "../../hooks/useRegister"
import Loading from "../Loading"
import { Alert } from "antd"
import { useNavigate } from "react-router-dom"

export default function Register ({handleRegisterPage}) {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")
    
    const { register, loading, isError, error } = useRegister()
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        // if (loading) return

        // console.log("test")
        // console.log(password, confirmPassword)
        register(email, password, confirmPassword)
    }

    if(isError == false) setTimeout(() => handleRegisterPage(), 1500)

    return (
        <form className="register-form" onSubmit={onSubmitHandler}>
            <h3><span style={{ color: '#53599A' }}>Welcome</span> <br /> and See Our <span style={{ color: '#53599A' }}> Teams </span></h3>

            <div className="email">
                <label htmlFor="email" id="email">Email</label>
                <input type="email" width={100} placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} required />
            </div>

            <div className="password" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="password" id="password">Password</label>
                <input type="password" width={100} placeholder="your password here" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>

            <div className="confirm-password" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="confirm-password" id="confirm-password">Confirm Password</label>
                <input type="password" width={100} placeholder="confirm your password here" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
            </div>

            {error && <Alert message={error} type={isError ? "error" : "success"} showIcon/> }
            

            <button className="login" >{loading ? <Loading /> : "Submit"}</button>
            <p className="back-to-login-page" style={{  }} onClick={handleRegisterPage}>Back to Login</p>
        </form>
    )
}