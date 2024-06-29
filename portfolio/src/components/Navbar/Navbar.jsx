import React from "react";
import "./Navbar.css";

export default function Navbar () {
    return (
        <>
            <div className="navbar">
                {/* sidebar */}
                <nav>
                    <span className="navbar--title">Shahrukh</span>
                    <div className="socials">
                        <a href="#"><img className="icon" src="/linkedin.png"/></a>
                        <a href="#"><img className="icon" src="/github.png"/></a>
                        <a href="#"><img className="icon" src="/email.png"/></a>
                    </div>
                </nav>
            </div>
        </>
    )
}