import { useNavigate } from "react-router-dom"
import "./homePage.css"
import Searchbar from "../Searchbar"
import searchIcon from "../../assets/icons/search.png"

export default function HomePage () {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('user')
        setTimeout(() => navigate('/login'), 3000 )
        
    }

    return(
        <div className="home-page">
            <button onClick={handleLogout} className="logout">Logout</button>

            <div className="container-list">
                {/* <Searchbar /> */}
                <div className="search">
                    <input type="text" placeholder="search..." />
                    <img src={searchIcon} alt="search-icon" style={{ width: '32px' }} />
                </div>

                <div className="list-user">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, modi.</p>
                </div>
            </div>
            
        </div>
        
    )
}