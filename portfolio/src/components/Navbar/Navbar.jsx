import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="navbar-container">
            <div className="navbar">
                <nav>
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="navbar--title"
                    >
                        Home
                    </motion.span>
                    <motion.div
                        className="socials"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <button onClick={() => scrollToSection("Experience")}>
                            <h3> Experience</h3>
                        </button>
                        <button onClick={() => scrollToSection("Projects")}>
                            <h3>Projects</h3>
                        </button>
                        <button onClick={() => scrollToSection("Contact")}>
                            <h3>Contact</h3>
                        </button>
                    </motion.div>
                </nav>
            </div>
        </div>
    );
}
