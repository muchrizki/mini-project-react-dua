import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useFetchSingleUser from "../../../hooks/useFetchSingleUser"
// import LogoutButton from "../../LogoutButton"
import "./UserDetail.css"
import linkedin from "../../../assets/socmed-icon/linkedin.png"
import whatsapp from "../../../assets/socmed-icon/whatsapp.png"
import instagram from "../../../assets/socmed-icon/instagram.png"

export default function UserDetails () {
    const { fetchSingleUser, userData } = useFetchSingleUser()

    const navigate = useNavigate()
    // const isLogin = localStorage.getItem('user')

    const {id} = useParams()
    // console.log(id)
    // console.log(userData)

    useEffect(() => {
        // if (isLogin == null) navigate('/')
        fetchSingleUser(id)
    }, [])
    

    return (
        <>
            <div className="header-user-detail">
                <h3>Grow Together</h3>
                <p onClick={() => navigate("/")}>back</p>        
            </div>

            <div className="user-detail">
                <img src={userData?.avatar} alt="" />

                <div className="user-detail-text">
                    <h3>{userData?.first_name + " " + userData?.last_name}</h3>
                    <p>{userData?.email}</p>

                    <div className="contacts-user">
                        <div className="linkedin item" >
                            <img src={linkedin} style={{ width: '32px', height: '32px' }} alt="" />
                            <p style={{ marginTop: '2px', fontSize: '1rem' }}>{userData?.first_name + "-" + userData?.last_name}</p>
                        </div>

                        <div className="linkedin item" >
                            <img src={whatsapp} style={{ width: '32px', height: '32px' }} alt="" />
                            <p style={{ marginTop: '2px', fontSize: '1rem' }}>+62 8565 6765 893</p>
                        </div>

                        <div className="linkedin item" >
                            <img src={instagram} style={{ width: '32px', height: '32px' }} alt="" />
                            <p style={{ marginTop: '2px', fontSize: '1rem' }}>@{userData?.first_name.toLowerCase() + userData?.last_name.toLowerCase()}</p>
                        </div>
                    </div>

                </div>

                <div className="user-desc">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ea ex tempora voluptatum. Ad accusamus perferendis fugit quae. Omnis, velit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus vitae atque nam, aliquam neque ex? Vel minus fugit assumenda laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem voluptatum eaque voluptatibus consequatur amet?</p>
                </div>
            </div>
        </>
    )
}