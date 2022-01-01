import React from "react";
import "./Navbar.scss"
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="nav__wrapper">
            <Link to="/" className="nav__title">
                JamieKuesel.com
            </Link>
            <div className="nav__link__wrapper">
                <Link to="/" className="nav__link__item">Home</Link>
                <Link to="/projects" className="nav__link__item">Projects</Link>
                <Link to="/comingsoon" className="nav__link__item">Resume</Link>
                <Link to="/connect" className="nav__link__item">Connect</Link>
            </div>
            <div className="nav__ending">

            </div>
        </div>
    )
}

export default Navbar;