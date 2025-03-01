
import HomePage from "../../components/HomePage";
import LandingPage from "../../components/LandingPage";

export default function Home ({ setRegisterFalse, setRegisterTrue}) {

    const user = localStorage.getItem('user')
    const isUser = JSON.parse(user)

    if(isUser) {
        return (
        
        <div style={{ width: '100%' }} className="home">

            <HomePage />            
            {/* <LandingPage  setRegisterFalse = {setRegisterFalse} setRegisterTrue = {setRegisterTrue}/> */}
        </div>
      
        )
    }

    return (
        <div style={{ width: '100%' }} className="home">
                 
                <LandingPage  setRegisterFalse = {setRegisterFalse} setRegisterTrue = {setRegisterTrue}/>
            
        </div>
    )
}

