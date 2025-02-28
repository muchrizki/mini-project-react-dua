
import { Link } from 'react-router-dom'
import './signupButton.css'

const SignupButton = ({setRegisterTrue}) => {

    return (<Link to={'/login'} className='signup-button'><button className="signup" onClick={setRegisterTrue} >Sign Up</button></Link>)
}

export default SignupButton