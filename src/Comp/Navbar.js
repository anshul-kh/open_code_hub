import {FaBars,FaTimes} from "react-icons/fa";
import { useRef } from 'react';
import "../Styles/main.css"
import {Link} from "react-router-dom"
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
                <Link to="/">Home</Link>
                <Link to="/community">Community</Link>
                <Link to="/anounce">Anouncemnt</Link>
                <Link to="/about">About</Link>
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