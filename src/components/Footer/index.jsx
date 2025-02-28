import "./footer.css"


export default function Footer (props) {

    const {menuNav, socmedIcon, section, handleNav} = props

    return (
        <div className="footer">

            <div className="company-name">
                <h3>Grow Together Team</h3>
                <a href="">muchrizkimubarok@gmail.com</a>
            </div>

            <div className="nav-menu">
                {menuNav.map(nav => <a key={nav} className={section === nav.toLowerCase() ? 'active' : ''} href={`#${nav.toLowerCase()}`} 
                onClick={() => handleNav(nav.toLowerCase())}>{nav}</a>)}
            </div>

            <div className="socmed">
                {socmedIcon.map(img => <img key={img} src={img} style={{ width: '32px' }} />)}
            </div>

        </div>
    )
}