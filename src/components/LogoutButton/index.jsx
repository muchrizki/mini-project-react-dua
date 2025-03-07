
import "./LogoutButton.css"

export default function LogoutButton ({handleLogout}) {

    

    return (
        <button onClick={handleLogout} className="logout">Logout</button>
    )
}   