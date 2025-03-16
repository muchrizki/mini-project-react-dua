import { useNavigate } from "react-router-dom"
import "./homePage.css"
// import Searchbar from "../Searchbar"
import searchIcon from "../../assets/icons/search.png"
import ListItemUser from "../ListItemUser"
import useFetchUserData from "../../hooks/useFetchUserData"
import { useEffect, useState } from "react"
import { Pagination } from 'antd'
import Loading from "../Loading"
import LogoutButton from "../LogoutButton"
// import { Breadcrumb } from 'antd'


export default function HomePage () {
    const {users, loading, totalPage, fetchUsers} = useFetchUserData()
    const [searchKey, setSearchKey] = useState('')
    const [searchUser, setSearchUser] = useState([])

    const [currentPage, setCurrentPage] = useState(0)
    // console.log(currentPage)
    const [logout, setLogout] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('user')
        setLogout(true)
        setTimeout(() => navigate('/login'), 3000 )
    }
    
    const navigate = useNavigate()
    // console.log(users)
    const handleSearch = () => {    
    //   const users = newUsers  
      
     if ( searchKey !== '') setSearchUser(users.filter(user => user.email.includes(searchKey)))
     else setSearchUser([])

    }
    

    const pageOnChange = (page) => {
        // console.log(page)
        setCurrentPage(page)
        // fetchUsers(page)
    }

    useEffect(() => { fetchUsers(currentPage) }, [])
    useEffect(() => { 
        fetchUsers(currentPage)
        handleSearch()
    }, [currentPage, searchKey])



    // console.log(currentPage)
    return(
        <div className="home-page">

            <div className="header">
                <h3>Grow Together</h3>
                {logout ? <Loading /> : <LogoutButton handleLogout={handleLogout}/> }
                
            </div>
            

            <div className="container-list">
                {/* <Searchbar /> */}
                <div className="search">
                    <input type="text" placeholder="search..." onChange={(e) => setSearchKey(e.target.value)} />
                    <img src={searchIcon} alt="search-icon" style={{ width: '32px' }} onClick={handleSearch}/>
                </div>

                <div className="list-user">

                    {
                        searchUser.length ? searchUser.map(user => <ListItemUser key={user.id} user = {user} />)
                        : users.map(user => <ListItemUser key={user.id} user = {user} />)
                    }

                </div>

                
            </div>

            <Pagination disabled={searchKey} defaultCurrent={currentPage} total={totalPage*10} onChange={pageOnChange} />
            
        </div>
        
    )
}