import "./register.css"

export default function Register ({handleRegisterPage}) {

    return (
        <form className="register-form">
            <h3><span style={{ color: '#53599A' }}>Welcome</span> <br /> and See Our <span style={{ color: '#53599A' }}> Teams </span></h3>

            <div className="email">
                <label htmlFor="" id="email">Email</label>
                <input type="email" width={100} placeholder="example@gmail.com" required />
            </div>

            <div className="password" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="" id="password">Password</label>
                <input type="password" width={100} placeholder="your password here" required />
            </div>

            <div className="confirm password" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="" id="password">Confirm Password</label>
                <input type="password" width={100} placeholder="confirm your password here" required />
            </div>

            <button className="login">Submit</button>
            <p className="back-to-login-page" onClick={handleRegisterPage}>Back to Login</p>
        </form>
    )
}