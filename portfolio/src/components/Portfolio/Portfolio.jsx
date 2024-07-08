import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Portfolio.scss";

export default function Portfolio() {
    const projects = [
        {
            title: "Cardiothoracic Disease Diagnosis",
            description: "Spotting cardiothoracic illness with superhuman accuracy: medical image analysis with cutting-edge neural networks, achieving 98.1% accuracy in locating Pneumonia, Cardiomegaly, and COVID-19 in chest scans.",
            img: "/cardio.png",
            icons: ["Python", "PyTorch", "TensorFlow", "Seaborns"],
            link: "https://github.com/SShowkath/CardiothoracicDiagnosisPublicRepository"
        },
        {
            title: "UT Dallas CS4349 - Advanced Algorithms Syllabus Chatbot",
            description: "CS4349 TA at your service! This chatbot project leverages the course syllabus to provide on-demand information and support for students.",
            img: "/Senior_Design.gif",
            icons: ["React", "Python", "OpenAI", "Langchain"],
            link: "https://github.com/SShowkath/syllabus-chatbot"
        },
        
        {
            title: "JPMorgan Code for Good Hackathon",
            description: "Grow stronger communities, one bite at a time. This interactive website empowers The FunkyTown Food Project, a non-profit, with gamified volunteer tracking, streamlined event management, and engaging sustainable farming education.",
            img: "/cfg.jpg",
            icons: ["React", "Node.js", "Firebase"],
            link: "https://github.com/cfgtexas22/team-17"
        },
        {
            title: "Engineuity - GitHub Discussions Search Engine",
            description: "This AI-powered search engine for GitHub Discussions leverages NLP techniques to categorize your queries with pinpoint accuracy. Find the insights you need faster with multi-label classification powered by BERT.",
            img: "/engineuity.png",
            icons: ["Python", "PyTorch", "Pinecone", "GraphQL", "React"],
            link: "https://github.com/SShowkath/AIM_Project_AI_Search_Engine"
        },
        {
            title: "Hospital Manager",
            description: "Custom data population scripts and a robust database integration system makes scheduling, staff assignment, and patient tracking a breeze.",
            img: "/hospital.jpg",
            icons: ["React", "PHP", "Python", "SQL"],
            link: "https://github.com/SShowkath/Hospital-Management-System---4337Bonus"
        },
    ];

    return (
        <div  className="portfolio">
            <div   className="portfolio--text">
                <h1 id="Projects" className="portfolio--title">Projects</h1>
                <h3 className="portfolio--subtitle">
                    A selection of some of my work
                </h3>
            </div>
            
            <div className="portfolio--grid">
                {projects.map((project, index) => (
                    <PortfolioCard id="portfolio-card" key={index} project={project} />
                ))}
            </div>
            <p id="portfolio-end">.</p>
        </div>
    );
}

const PortfolioCard = ({ project }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <a href={project.link}>
            <div className="portfolio--card">
                <div className="portfolio--img-wrapper">
                    <motion.img
                        className="portfolio--img"
                        ref={ref}
                        initial={{ opacity: 0 }}   
                        animate={isInView ? { opacity: 1,x: [1000, -100, 100, 0] } : {}}
                        transition={{ type: "spring", inertia: 10, duration: 1 }}
                        src={project.img}
                        alt={project.title}
                    />
                </div>
                
                <motion.div className="card--text"
                    ref={ref}
                    initial={{ opacity: 0 }}  
                    animate={isInView ? {  opacity: 1, x: [1000, -100, 100, 0] } : {}}
                    transition={{ type: "spring", inertia: 10, duration: 1 }}>
                        <h1  className="card--titles" ><a href={project.link}>{project.title}<img src="/link.png"/></a></h1>
                        <h3 className="card--descriptions">{project.description}</h3>
                        <div className="portfolio--icons">
                            {project.icons.map((icon, index) => (
                                <div key={index}>{icon}</div>
                            ))}
                        </div>
                </motion.div>
                
            </div>
            
        </a>
    );
};
