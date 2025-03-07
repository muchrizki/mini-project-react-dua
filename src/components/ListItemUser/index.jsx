
import "./listItemUser.css"
import UserAvatar from "../User/UserAvatar";
import { Link, NavLink } from "react-router-dom";

export default function ListItemUser ({user}) {

    return (
        <>  
            <div className="list-item-user">
                
                <UserAvatar avatar = {user?.avatar}/>

                <div className="text">
                    <h4 className="name">{user?.first_name + " " + user?.last_name}</h4>
                    <p className="email">{user?.email}</p>
                    <Link to={`user/${user?.id}`} className="detail-button"> Details</Link>
                </div>

                
                
            </div>
     
        </>
    )
}