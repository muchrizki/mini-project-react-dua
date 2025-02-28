import UserCard from "../../User/UserCard"
import "./peopleSection.css"

export default function PeopleSection () {
    
    const data = [
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        }, 
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        }
    ]

    return (
        <div className="people-section" id="people">

            <div className="container-text-user">
                <h3>Our Teams</h3>
                <p>Talent wins games, but teamwork and intelligence win championships</p>
                <p>~ <span style={{ fontSize: '1.1rem', letterSpacing: '2px', color: '#53599A' }}>Michael Jordan</span> ~</p>
            </div>
            
            <div className="container-card-user">
                {data.map(user => (<UserCard key={user.id} user = {user} />))}
            </div>

            
        </div>
    )
}