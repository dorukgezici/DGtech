import React, { Component } from "react";
import "./Navbar.css";
import logo from "./logo.svg";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img className="brand-logo" src={logo} width="30" height="30" alt="Logo"/>
                    DGtech
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/blog" className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="/components" className="nav-link">Components</a>
                        </li>
                        <li className="nav-item">
                            <a href="/landing-page" className="nav-link">Landing Page</a>
                        </li>
                        <li className="nav-item">
                            <a href="/profile-page" className="nav-link">Profile Page</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
