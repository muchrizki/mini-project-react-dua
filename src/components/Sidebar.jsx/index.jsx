import LoginButton from "../LoginButton";
import SignupButton from "../SignupButton";
import "./sidebar.css"

export default function Sidebar ({menuNav, section, handleNav , setRegisterFalse, setRegisterTrue}) {

    return (
        <div className="sidebar">
            
            <ul>
                {menuNav.map(nav => <a key={nav} className={section === nav.toLowerCase() ? 'active' : ''} href={`#${nav.toLowerCase()}`} 
                onClick={() => {handleNav(nav.toLowerCase())}} >{nav}</a>)}
            </ul>
            <div className="button">
                <LoginButton setRegisterFalse = { setRegisterFalse }/>
                <SignupButton setRegisterTrue = { setRegisterTrue }/>
            </div>
        </div>
    )
}