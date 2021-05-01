import React from 'react';
import {
    Link
  } from "react-router-dom";

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/About">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/Contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/Blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="Contact">Contact</Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Header;