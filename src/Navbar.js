// @ Eetu
import React, {useState, useEffect} from 'react';
import { Link } from "react-scroll";
import './Navbar.css';

function NavBar() {

    return (
        <>
        <nav className = 'navibar'>
            <div className ='navibar-container' id="Alku">
            <Link
                            activeClass="active"
                            to="Alku"
                            spy={true}
                            smooth={true}
                            offset={-10000}
                            duration={500}
                        >
                           OPI WEB-KEHITYKSESTÄ
                        </Link>
               
            
            </div>
        </nav>
        </>
    );
}

export default NavBar