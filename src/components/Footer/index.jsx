import "./footer.css"


export default function Footer (props) {

    const {menuNav, socmedIcon, section, handleNav} = props

    // console.log(socmedIcon)
    const linkURL = [
        "https://github.com/muchrizki",
        "https://wa.me/62895324867789/",
        "https://www.instagram.com/rzk_mbrk07/",
        "https://www.linkedin.com/in/much-rizki-mubarok/"
    ]

    const result = socmedIcon.map((key, index) => {
        return {
            sourceImage : key,
            link : linkURL[index]
        }
    })

    // console.log(result)



    return (
        <div className="footer">

            <div className="company-name">
                <h3>Grow Together Team</h3>
                <a href="https://mailto:muchrizkimubarok@gmail.com" target="_blank">muchrizkimubarok@gmail.com</a>
            </div>

            <div className="nav-menu">
                {menuNav.map(nav => <a key={nav} className={section === nav.toLowerCase() ? 'active' : ''} href={`#${nav.toLowerCase()}`} 
                onClick={() => handleNav(nav.toLowerCase())}>{nav}</a>)}
            </div>

            <div className="socmed">
                {result.map(img => <a key={img.link} href={img.link} target="_blank"> <img src={img.sourceImage} style={{ width: '32px' }} /> </a> )}
            </div>

        </div>
    )
}