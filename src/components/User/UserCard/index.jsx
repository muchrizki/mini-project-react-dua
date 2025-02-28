import "./userCard.css"

export default function UserCard ({user}) {

    return (
        <div className="card" data-aos="flip-left" data-aos-duration="3000">

            <div className="profileImage">
                <img src={user?.avatar} alt={`profile-${user?.name}`} />
            </div>

            <div className="textContainer">
                <h4 className="name">{user?.first_name + ' ' + user?.last_name}</h4>
                <p className="email">{user?.email}</p>
            </div>

        </div>
    )
}