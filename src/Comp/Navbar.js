import {FaBars,FaTimes} from "react-icons/fa";
import { useRef } from 'react';
import "../Styles/main.css"
function Navbar(){
    const navRef = useRef();
    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <header>
            <h3>
                OPENcodeHUB
            </h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Community</a>
                <a href="/#">Anouncemnt</a>
                <a href="/#">Our Team</a>
                <a href="/#">About</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                      <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>

    );
}

export default Navbar ;