import "./Experience.scss";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
          title: 'JP Morgan Chase',
          date: 'Summer 2024',
          description: 'Returned to JPMC as a SWE intern for Financial Data Integration team for Corporate Technology',
          img: "./public/JP_Morgan_logo.png"
        },
        {
          title: 'DesignAI Group',
          date: 'Jan - May 2024',
          description: 'Research assistant for Dr. Qian Yang\'s group, where I worked on a RAG pipeline for a medical literature assistant that personalizes research summaries for users',
          img: "./public/cornell.png"
        },
        {
            title: 'Cornell University',
            date: 'Jan - Dec 2024 (Expected)',
            description: 'Continued education to pursue a Masters of Engineering in Computer Science at Cornell Univeristy.',
            img: "./public/cornell.png"
          },
        {
            title: 'University of Texas at Dallas',
            date: '2021 - Fall 2023',
            description: 'Graduated with a B.S. in Computer Science',
            img: "./public/utd.jpg"
          },
        {
          title: 'JP Morgan Chase',
          date: 'Summer 2023',
          description: "SWE intern on the Global Banking Platform team, where I designed and built a TerraForm lifecycle management application to streamline infrastructure provisioning.",
          img: "./public/JP_Morgan_logo.png"
        },
        {
            title: 'ACM UT Dallas',
            date: 'Jan - May 2023',
            description: 'Conducted research under Dr. Katherine Brown on using CV models to pinpoint and effectively diagnose cardiothoracic diseases based on chest scans.',
            img: "./public/acm.jpg"
          },
        {
            title: 'COINS Lab',
            date: 'May - Dec 2022',
            description: 'Research Assistant for Dr. Richard Golden, where I developed cognitive diagnostic models to assess examination question skills via an intelligent GUI for skill assignment and interrelation analysis.',
            img: "./public/coins.png"
          },
          
          {
            title: 'Teaching Intern - Codeucate',
            date: 'Summer 2020',
            description: 'Developed and taught beginner to intermediate Java, JavaScript, Python, and Scratch courses to 100+ students',
            img: "./public/codeucate.jpg"
          },
      ];

    return (
        <div id="Experience" className="Experience">
            <div className="timeline-wrapper">
                <h1>What I've Done</h1>
                <div className="timeline">
                    {experiences.map((exp, index) => {
                        const ref = useRef(null);
                        const inView = useInView(ref, { once: true });

                        return (
                            <div
                                className={`timeline-item ${index % 2 === 0 ? 'even-class' : 'odd-class'}`}
                                
                            >
                                <motion.img src={exp.img} alt="experience-logo"
                                    ref={ref}
                                    key={index}
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: inView ? 1 : 0}}
                                    transition={{ duration: 1 }} />
                                <motion.div className="timeline-content"
                                ref={ref}
                                key={index}
                                initial={{ opacity: 0, y:-100 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50}}
                                transition={{ duration: 1.35 }}>
                                    <h2>{exp.title}</h2>
                                    <small>{exp.date}</small>
                                    <p>{exp.description}</p>
                                    <span className={`spanner ${index % 2 === 0 ? 'even-span' : 'odd-span'}`}></span>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
