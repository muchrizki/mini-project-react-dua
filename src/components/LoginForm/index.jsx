import "./loginForm.css"

export default function LoginForm ({google, facebook, handleRegisterPage}) {

    return (
        <form action="" className="login">
            <h3><span style={{ color: '#53599A' }}>Welcome</span> <br /> and See Our <span style={{ color: '#53599A' }}> Teams </span></h3>

            <div className="email">
                <label htmlFor="" id="email">Email</label>
                <input type="email" width={100} placeholder="example@gmail.com" required />
            </div>

            <div className="password" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="" id="password">Password</label>
                <input type="password" width={100} placeholder="your password here" required />
            </div>

            <button className="login">Login</button>

            <a className="toregister" onClick={handleRegisterPage}>{"Don't"} have an account?</a>

            <div className="regist-socmed">
                <img src={google} alt="google-icon" className="google" />
                <p>or</p>
                <img src={facebook} alt="facebook-icon" className="facebook" />
            </div>

        </form>
    )
}