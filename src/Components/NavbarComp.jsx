import React from "react";
import './NavbarComp.css'
import { Link } from "react-router-dom";

function NavbarComp() {
    return (
        <header>
            <div className="logo">FREEP!K</div>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                    <li>
                    <Link to="/register">Register</Link>                
                    </li>
                    <li>
                        <a href="">Lottery</a>
                    </li>
                </ul>

            </nav>
            <label htmlFor="nav_check" className="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </label>
        </header>
    );
}

export default NavbarComp;
