import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Portfolio.css";

export default function Portfolio() {
    const projects = [
        {
            title: "UT Dallas CS4349 - Advanced Algorithms Syllabus Chatbot",
            description: "CS4349 TA at your service! This chatbot project leverages the course syllabus to provide on-demand information and support for students.",
            img: "/Senior_Design.gif",
        },
        {
            title: "Cardiothoracic Disease Diagnosis",
            description: "Spotting cardiothoracic illness with superhuman accuracy: medical image analysis with cutting-edge neural networks, achieving 98.1% accuracy in locating Pneumonia, Cardiomegaly, and COVID-19 in chest scans.",
            img: "/cardio.png",
        },
        {
            title: "JPMorgan Code for Good Hackathon Project",
            description: "Grow stronger communities, one bite at a time. This interactive website empowers The FunkyTown Food Project, a non-profit, with gamified volunteer tracking, streamlined event management, and engaging sustainable farming education.",
            img: "/cfg.jpg",
        },
        {
            title: "Engineuity - GitHub Discussions Search Engine",
            description: "This AI-powered search engine for GitHub Discussions leverages NLP techniques to categorize your queries with pinpoint accuracy. Find the insights you need faster with multi-label classification powered by BERT.",
            img: "/engineuity.png",
        },
        {
            title: "Hospital Manager",
            description: "Custom data population scripts and a robust database integration system makes scheduling, staff assignment, and patient tracking a breeze.",
            img: "/hospital.jpg",
        },
    ];

    return (
        <div className="portfolio">
            <h1 className="portfolio--title">Projects</h1>
            <div className="portfolio--grid">
                {projects.map((project, index) => (
                    <PortfolioCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

const PortfolioCard = ({ project }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="portfolio--card">
            <motion.div className="card--text"
            ref={ref}
            animate={isInView ? { x: [-1000, 100, -100, 0] } : {}}
            transition={{ type: "spring", inertia: 10, duration: 1 }}>
                <h1 className="card--titles">{project.title}</h1>
                <h3 className="card--descriptions">{project.description}</h3>
                
            </motion.div>
            <div className="portfolio--img-wrapper">
                <motion.img
                    className="portfolio--img"
                    ref={ref}
                    animate={isInView ? { x: [1000, -100, 100, 0] } : {}}
                    transition={{ type: "spring", inertia: 10, duration: 1 }}
                    src={project.img}
                    alt={project.title}
                />
            </div>
        </div>
    );
};
