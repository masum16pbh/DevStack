import { useState } from "react";
import logo from "../assets/logo-text.png"
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <nav className="sticky top-0 z-50 relative">
                <div className="flex justify-between items-center">
                    <button className="md:hidden p-2 hover:text-emerald-500" onClick={() => setOpen(!isOpen)}><RxHamburgerMenu /></button>
                    <img src={logo} alt="" />
                    <ul className={`${isOpen ? "flex" : "hidden"} flex-col md:flex-row md:flex absolute md:static justify-between gap-2 
      left-0 top-full
      bg-white`}>
                        <li className="text-red-600">Home</li>
                        <li>Techonologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div>
                        <button className="btn rounded-3xl">Sign in</button>
                        <button className="btn btn-secondary rounded-3xl">Sign up</button>
                    </div>
                </div>
            </nav>
        </>
    )
}