
import "./listItemUser.css"
import UserAvatar from "../User/UserAvatar";

export default function ListItemUser ({user}) {

    return (
        <>  
            <div className="list-item-user">
                
                <UserAvatar avatar = {user?.avatar}/>

                <div className="text">
                    <h4 className="name">{user?.first_name + " " + user?.last_name}</h4>
                    <p className="email">{user?.email}</p>
                </div>
            </div>
        </>
    )
}