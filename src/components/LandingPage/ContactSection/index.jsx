import { Link } from 'react-router-dom'
import "./contactSection.css"
import "./socmed.css"

export default function ContactSection (props) {

    const {socmedIcon} = props
    // console.log(socmedIcon)

    return (
    <div className="contact-section" id='contact'>

        <div className="social-media" data-aos="flip-left" data-aos-duration="3000">
        {/* From Uiverse.io by Praashoo7 */}
            <div className="main">

                <div className="up">

                    <button className="card1">
                        <a href="https://www.instagram.com/rzk_mbrk07/" target="_blank">
                        <img src={socmedIcon[2]} style={{ width: '30px', borderRadius: '20%' }}  className='instagram' alt="" />
                        </a>
                    </button>

                    <button className="card2">
                        <a href="https://www.linkedin.com/in/much-rizki-mubarok" target="_blank">
                        <img src={socmedIcon[3]} style={{ width: '40px', borderRadius: '50%' }} className='linkedin' alt="" />
                        </a>
                    </button>

                </div>

                <div className="down">

                    <button className="card3">
                        <a href="https://github.com/muchrizki" target='_blank'>
                        <img src={socmedIcon[0]} style={{ width: '40px', borderRadius: '50%' }} className='github' alt="" />
                        </a>
                    </button>

                    <button className="card4">
                        <a href="https://wa.me/62895324867789" target='_blank'>
                        <img src={socmedIcon[1]} style={{ width: '40px', borderRadius: '50%' }} className='whatsapp' alt="" />
                        </a>
                    </button>

                </div>

            </div>
        </div>
        
        <div className="get-in-touch">
            <h3>Get In Touch</h3>
            <p>{`Let's`} Connect! Work together to be a Greater Team with Excellent teamwork. </p>
            <Link to="/login" className="join-a-team">Join a team</Link>
        </div>

        

    </div>
    )
}