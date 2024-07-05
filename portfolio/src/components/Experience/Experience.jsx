import "./Experience.scss";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
          title: 'SWE Intern - JP Morgan Chase',
          date: 'Summer 2024',
          description: 'Current',
          img: "./public/JP_Morgan_logo.png"
        },
        {
          title: 'Research Assistant - DesignAI Group',
          date: 'Jan - May 2024',
          description: 'Built an intelligent medical literature assistant using a retrieval augmented generation (RAG) pipeline, optimizing information retrieval and analyzing explanation quality metrics for user feedback.',
          img: "./public/cornell.png"
        },
        {
          title: 'SWE Intern - JP Morgan Chase',
          date: 'Summer 2023',
          description: 'Created a Terraform module management tool with a TKinter GUI, optimized Grafana API calls for faster data retrieval, automated parameter updates with Selenium, and streamlined deployment using PyInstaller.',
          img: "./public/JP_Morgan_logo.png"
        },
        {
            title: 'Research Assistant - COINS Lab',
            date: 'May - Dec 2022',
            description: 'Collaborated with Dr. Richard Golden on cognitive diagnostic modeling using R to assess examination question skills in ACED and Fraction-Subtraction datasets. Designed an intelligent GUI in Julia for skill assignment and interrelation analysis via Q-Matrix and OMEGA-Matrix.',
            img: "./public/utd.jpg"
          },
          {
            title: 'Teaching Intern - Codeucate',
            date: 'Summer 2020',
            description: 'Developed and taught beginner to intermediate Java, JavaScript, Python, and Scratch courses to over 100 students',
            img: "./public/codeucate.jpg"
          },
      ];

    return (
        <div id="Experience" className="Experience">
            <div className="timeline-wrapper">
                <h1>Experience</h1>
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
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100}}
                                transition={{ duration: 1 }}>
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
