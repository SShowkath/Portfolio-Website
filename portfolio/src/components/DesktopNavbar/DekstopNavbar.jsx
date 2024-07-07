import React, { useState, useEffect } from "react";
import "./DesktopNavbar.scss";
import { motion } from "framer-motion";

export default function DesktopNavbar() {
    const [activeSection, setActiveSection] = useState("Home");
    const [isVisible, setIsVisible] = useState(true);  // Start with true for debugging

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth > 768); // Show navbar when width > 768px
        };

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

        // Initial check
        handleResize();

        // Attach event listeners
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!isVisible) {
        console.log("DesktopNavbar is not visible");
        return null;
    }

    console.log("DesktopNavbar is rendering");

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
                        {["Home", "Experience", "Projects", "About", "Contact"].map((section) => (
                            <button
                                key={section}
                                className={activeSection === section ? "active" : ""}
                                onClick={() => scrollToSection(section)}
                            >
                                <h3>{section}</h3>
                            </button>
                        ))}
                    </motion.div>
                </nav>
            </div>
        </div>
    );
}