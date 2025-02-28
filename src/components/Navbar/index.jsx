import LoginButton from '../LoginButton'
import SignupButton from '../SignupButton'
import { Link } from 'react-router-dom'
import './navbar.css'
import Hamburger from '../Hamburger'
import { useEffect } from 'react'

export default function Navbar ({ logo, menuNav, handleNav, handleSidebar, section, handleRegisterPage, setRegisterFalse, setRegisterTrue }) {
    // console.log(section)
    return (
        <div className='navbar'>
            
            <div className="logo">
                <img src={logo} width={48} alt="logo" className='logo-img' />
                <h2>Grow Together</h2>
            </div>

            <ul className="nav-menu">
                {menuNav.map((menu) => <a key={menu} className={section === menu.toLowerCase() ? 'active' : ''} href={`#${menu.toLowerCase()}`} 
                onClick={ () => handleNav(menu.toLowerCase())  } >{menu}</a> )}
            </ul>

            <div className="login-or-signup-button">
                <LoginButton setRegisterFalse = {setRegisterFalse}/>
                <SignupButton setRegisterTrue = {setRegisterTrue}/>
            </div>

            <Hamburger handleSidebar={handleSidebar}/>
            
            
        </div>
    )
}