import "./hamburger.css"

export default function Hamburger ({handleSidebar}) {

    return (
        <>
            {/* <!-- From Uiverse.io by ahmedyasserdev -->  */}
            <input id="burger-checkbox" type="checkbox" className="burger-checkbox" onClick={handleSidebar}/>
            <label className="burger" htmlFor="burger-checkbox">
            <span></span>
            <span></span>
            <span></span>
            </label>

        </>
    )
}