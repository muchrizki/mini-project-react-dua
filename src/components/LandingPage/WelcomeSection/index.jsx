import "./welcomeSection.css"

export default function WelcomeSection ({ logo }) {


    return(
        <div className="welcome-section" id="home">

            <div className="welcome-text" data-aos="fade-up" data-aos-duration="3000">
                <h3>Welcome to <br /><span style={{ color: '#53599A' }}> Grow Together </span> Team! </h3>
                <p className="quote">Coming together is a beginning. And also keeping together is progress. So working together is success.</p>
                <p >~  <span style={{  color: '#53599A' }}> Henry Ford </span> ~</p>
            </div>

            <div className="welcome-img" data-aos="flip-left" data-aos-duration="3000">
                <img src={logo} alt="logo" />
            </div>
            

            

        </div>
    )
}