import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            const sections = ["Home", "Experience", "Projects", "portfolio-end", "About", "Contact"];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { top, height } = element.getBoundingClientRect();
                    if (top <= window.innerHeight * 0.5 && top + height > window.innerHeight * 0.5) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        // Attach scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up scroll event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
                    <motion.div
                        className="socials"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <button
                            className={activeSection === "Home" ? "active" : ""}
                            onClick={() => scrollToSection("Home")}
                        >
                            <h3>Home</h3>
                        </button>
                        <button
                            className={activeSection === "Experience" ? "active" : ""}
                            onClick={() => scrollToSection("Experience")}
                        >
                            <h3>Experience</h3>
                        </button>
                        <button
                            className={activeSection === "Projects" ? "active" : ""}
                            onClick={() => scrollToSection("Projects")}
                        >
                            <h3>Projects</h3>
                        </button>
                        <button
                            className={activeSection === "About" ? "active" : ""}
                            onClick={() => scrollToSection("About")}
                        >
                            <h3>About</h3>
                        </button>
                        <button
                            className={activeSection === "Contact" ? "active" : ""}
                            onClick={() => scrollToSection("Contact")}
                        >
                            <h3>Contact</h3>
                        </button>
                    </motion.div>
                </nav>
            </div>
        </div>
    );
}
