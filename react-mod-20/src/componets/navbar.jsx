import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

function navbar() {
    const currentPage = useLocation().pathname;

    return (
        <div>
           
            <ul className="nav nav-bar">
           
            <h1 className="nav-header" >Shawn Perez</h1>
           
                <li className="nav-item">
                    <Link 
                        to="/"
                        className={currentPage === "/" ? "nav-link active" : "nav-link"}
                    >About</Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="/contact"
                        className={currentPage === "/contact" ? "nav-link active" : "nav-link"}
                    >Contact</Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="/portfolio"
                        className={currentPage === "/portfolio" ? "nav-link active" : "nav-link"}
                    >Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="/resume"
                        className={currentPage === "/resume" ? "nav-link active" : "nav-link"}
                    >Resume</Link>
                </li>
            </ul>
        </div>
    );
}

export default navbar;