import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary mainNavbar">
            <div className="navbar-brand">
                Note App
            </div>
            <ul className="main-navbar-nav">
                <li className="nav-item main-nav-item">
                    <NavLink 
                        className="nav-link" 
                        to={'/'}
                    >
                        Главная
                    </NavLink>
                </li>
                <li className="nav-item main-nav-item">
                    <NavLink 
                        className="nav-link" 
                        to={'/About'}
                    >
                        Информация
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
