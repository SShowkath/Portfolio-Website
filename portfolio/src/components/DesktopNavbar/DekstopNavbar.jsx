import React, { useState, useEffect } from "react";
import "./DesktopNavbar.scss";
import { motion } from "framer-motion";

export default function DesktopNavbar() {
    const [activeSection, setActiveSection] = useState("Home");
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth > 768);
        };

        const handleScroll = () => {
            const sections = ["Home", "Experience", "Projects", "About", "Contact"];
            let maxVisibleArea = 0;
            let currentActiveSection = "";

            sections.forEach((section) => {
                let visibleArea = 0;

                if (section === "Projects") {
                    ["Projects", "portfolio-card"].forEach(id => {
                        const element = document.getElementById(id);
                        if (element) {
                            const rect = element.getBoundingClientRect();
                            const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
                            visibleArea += Math.max(0, visibleHeight) / window.innerHeight;
                        }
                    });
                } else {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
                        visibleArea = Math.max(0, visibleHeight) / window.innerHeight;
                    }
                }

                if (visibleArea > maxVisibleArea) {
                    maxVisibleArea = visibleArea;
                    currentActiveSection = section;
                }
            });

            // Only update if a new section is prominently visible
            if (currentActiveSection !== "" && currentActiveSection !== activeSection) {
                setActiveSection(currentActiveSection);
            }
        };

        handleResize();
        handleScroll();

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeSection]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!isVisible) {
        return null;
    }

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