import React from 'react';
import {
    Link
  } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light  nav-section">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-3 text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3 text-white" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3 text-white" to="/projects">projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3 text-white" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3 text-white" to="/blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                    <a href="https://drive.google.com/uc?export=download&id=1ss1i0nibS5sMuo4V9OHXPQmYU75mY81M"><button className="btn btn-success mr-3 nav-resume-button">Resume</button></a>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Header;