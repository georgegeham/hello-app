import React from "react";
import logo from "../logo192.png";
export default function Header() {
    return (
        <header>
            <div className="container">
                <nav className="Header">
                    <div className="logo">
                        <img src={logo} alt="React Logo" className="img">
                        </img>
                        <h3 className="logo-Name">ReactFacts</h3>
                    </div>
                    <div className="info">
                        React Course - Project 1
                    </div>
                </nav>
            </div>
        </header >
    )
}