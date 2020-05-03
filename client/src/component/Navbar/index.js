import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (

    <div className="navigation">

        <input type="checkbox" className="navigation__checkbox" id="navi_toggle"/>
        <label htmlFor="navi_toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background"></div>
        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item">
                <Link to="/bio" className="navigation__link">Home</Link>
                </li>
                <li className="navigation__item">
                <Link to="/contact" className="navigation__link">contact</Link>
                </li>
                <li className="navigation__item">
                <Link to="/portfolio" className="navigation__link">portfolio</Link>
                </li>
            </ul>
        </nav>
    </div>

    )
}

export default Navbar;