import { useNavigate } from "react-router-dom"
import "./homePage.css"
// import Searchbar from "../Searchbar"
import searchIcon from "../../assets/icons/search.png"
import ListItemUser from "../ListItemUser"
import useFetchUserData from "../../hooks/useFetchUserData"
import { useEffect, useState } from "react"
import { Pagination } from 'antd'
import Loading from "../Loading"


export default function HomePage () {
    const {users, loading, totalPage, fetchUsers} = useFetchUserData()

    const [currentPage, setCurrentPage] = useState(1)
    // console.log(currentPage)
    const [logout, setLogout] = useState(false)
    
    const navigate = useNavigate()
    // console.log(users)

    const handleLogout = () => {
        localStorage.removeItem('user')
        setLogout(true)
        setTimeout(() => navigate('/login'), 3000 )
    }

    const pageOnChange = (page) => {
        setCurrentPage(page)
        // console.log(page)
        fetchUsers(page)
    }

    useEffect(() => fetchUsers(currentPage), [])

    return(
        <div className="home-page">

            <div className="header">
                <h3>Grow Together</h3>
                {logout ? <Loading /> : <button onClick={handleLogout} className="logout">Logout</button> }
                
            </div>
            

            <div className="container-list">
                {/* <Searchbar /> */}
                <div className="search">
                    <input type="text" placeholder="search..." />
                    <img src={searchIcon} alt="search-icon" style={{ width: '32px' }} />
                </div>

                <div className="list-user">

                    {users.map(user => <ListItemUser key={user.id} user = {user} />)}

                </div>
            </div>

            <Pagination defaultCurrent={currentPage} total={totalPage*10} onChange={pageOnChange} />
            
        </div>
        
    )
}