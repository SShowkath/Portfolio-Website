import React from "react";
import "./Experience.scss";

export default function Experience() {
    const experiences = [
        {
          title: 'Software Engineer Intern - JP Morgan Chase.',
          date: 'Jun 2024 - Aug 2024',
          description: 'stuff',
        },
        {
          title: 'intern',
          date: 'x',
          description: 'stuff',
        },
        {
          title: 'Intern',
          date: 'x',
          description: 'stuff',
        },
        {
            title: 'intern',
            date: 'x',
            description: 'Wstuff',
          },
          {
            title: 'intern',
            date: 'Jx',
            description: 'stuff',
          },
      ];

    return (
        <div id="Experience" className="Experience">
            <h1>Experience</h1>
            <div className="experience--wrapper">
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-content">
                                <div className="timeline-text">
                                    <h3>{exp.title}</h3>
                                    <div className="descriptions">
                                        <span>{exp.date}</span>
                                        <p>{exp.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
