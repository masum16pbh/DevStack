import logo from "../assets/logo-text.png"
export default function NavBar(){
    return(
        <>
        <div>
            <div>
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>Techonologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div>
                    <button>up</button>
                    <button>IN</button>
                </div>
            </div>
        </div>
        </>
    )
}