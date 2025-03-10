import { Link } from "react-router-dom"
import "./aboutSection.css"

export default function AboutSection ( {image}) {

    return(
        <div className="about-section" id="about">

            <div className="about-img" data-aos="flip-left" data-aos-duration="3000">
                <img src={image} alt="about-image" />
            </div>

            <div className="about-text" >
                <h3>About Our Teams</h3>
                <p>{"Let's"} be a Bigger Team with Clear Communication, Shared Responsibility, Collaboration and Trust.</p>
                <Link to={'/login'} className="link-see-all-team">See all teams</Link>
            </div>
        </div>
    )
}