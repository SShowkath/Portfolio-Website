import React from "react";
import "./Experience.scss";

export default function Experience() {
    const experiences = [
        {
          title: 'Software Engineer Intern - JP Morgan Chase.',
          date: 'Jun 2024 - Aug 2024',
          description: 'Worked on developing scalable web applications.',
        },
        {
          title: 'Web Developer',
          date: 'Jun 2018 - Dec 2019',
          description: 'Built and maintained websites for various clients.',
        },
        {
          title: 'Intern',
          date: 'Jan 2018 - May 2018',
          description: 'Assisted in the development of internal tools and utilities.',
        },
        {
            title: 'Software Engineer',
            date: 'Jan 2020 - Present',
            description: 'Worked on developing scalable web applications.',
          },
          {
            title: 'Web Developer',
            date: 'Jun 2018 - Dec 2019',
            description: 'Built and maintained websites for various clients.',
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
