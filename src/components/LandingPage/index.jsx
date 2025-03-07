import Navbar from "../../components/Navbar";
import logo from "../../assets/nav-logo/logo.png"
import WelcomeSection from "../../components/LandingPage/WelcomeSection";
import AboutSection from "../../components/LandingPage/AboutSection";
import aboutImage from "../../assets/landingpage-img/about-team-img.jpg"
import PeopleSection from "../../components/LandingPage/PeopleSection";
import ContactSection from "../../components/LandingPage/ContactSection";
import github from "../../assets/socmed-icon/github.png"
import whatsapp from "../../assets/socmed-icon/whatsapp.png"
import instagram from "../../assets/socmed-icon/instagram.png"
import linkedin from "../../assets/socmed-icon/linkedin.png"
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar.jsx";

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function LandingPage ({setRegisterFalse, setRegisterTrue}) {

    const menuNav = ['Home', 'About', 'People', 'Contact']
    const socmedIcon = [github, whatsapp, instagram, linkedin]

    const [section, setSection] = useState('home')
    const [sidebar, setSidebar] = useState(true)
    
    // console.log(sidebar)

    const handleSidebar = () => setSidebar(!sidebar)

    const handleNav = (section) => setSection(section)

    useEffect(() => {
        Aos.init()
    }, [])

    

    return (
        <>
            <Navbar logo = { logo } menuNav = { menuNav } handleNav = { handleNav } section = { section } handleSidebar = {handleSidebar} setRegisterFalse = {setRegisterFalse} setRegisterTrue = {setRegisterTrue}/>

            {!sidebar && <Sidebar menuNav = { menuNav } section = { section } handleNav = { handleNav } setRegisterFalse = {setRegisterFalse} setRegisterTrue = {setRegisterTrue}  />}
           
            <WelcomeSection logo = { logo } />
            <AboutSection image = { aboutImage } />
            <PeopleSection />
            <ContactSection socmedIcon = { socmedIcon } />
            <Footer menuNav = { menuNav } socmedIcon = { socmedIcon } section = { section } handleNav = { handleNav } />
        </>
    )
}