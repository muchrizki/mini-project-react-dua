import LandingPage from "../../components/LandingPage";

export default function Home ({ setRegisterFalse, setRegisterTrue}) {


    return (
        <div style={{ width: '100%' }} className="home">
            <LandingPage  setRegisterFalse = {setRegisterFalse} setRegisterTrue = {setRegisterTrue}/>
        </div>
    )
}

