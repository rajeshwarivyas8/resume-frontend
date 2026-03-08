// components/ResumeBuilder/Templates/ModernTemplate.jsx
import React from 'react';

const ModernTemplate = ({ data }) => {
  const { personalInfo, summary, experience, education, skills, projects } = data;

  return (
    <div className="modern-template">
      {/* Header Section */}
      <div className="header">
        <div className="name-section">
          <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
          <div className="contact-info">
            {personalInfo.email && <span>📧 {personalInfo.email}</span>}
            {personalInfo.phone && <span>📞 {personalInfo.phone}</span>}
            {personalInfo.address && <span>📍 {personalInfo.address}</span>}
          </div>
          <div className="social-links">
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin}>💼 LinkedIn</a>
            )}
            {personalInfo.github && (
              <a href={personalInfo.github}>👨‍💻 GitHub</a>
            )}
            {personalInfo.website && (
              <a href={personalInfo.website}>🌐 Website</a>
            )}
          </div>
        </div>
      </div>

      {/* Summary Section */}
      {summary && (
        <div className="section summary-section">
          <h2>Professional Summary</h2>
          <p>{summary}</p>
        </div>
      )}

      {/* Experience Section */}
      {experience.length > 0 && (
        <div className="section experience-section">
          <h2>Work Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="job-title-company">
                  <h3>{exp.jobTitle}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="date-location">
                  <span className="date">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                  {exp.location && <span className="location">{exp.location}</span>}
                </div>
              </div>
              {exp.description && (
                <div className="description">
                  {exp.description.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <div className="section education-section">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <div className="degree-school">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                </div>
                <div className="date-location">
                  <span className="date">{edu.graduationDate}</span>
                  {edu.location && <span className="location">{edu.location}</span>}
                </div>
              </div>
              {edu.gpa && <p className="gpa">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <div className="section skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <div className="section projects-section">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-header">
                <h3>{project.name}</h3>
                <div className="project-links">
                  {project.github && <a href={project.github}>GitHub</a>}
                  {project.demo && <a href={project.demo}>Demo</a>}
                </div>
              </div>
              {project.description && <p>{project.description}</p>}
              {project.technologies && (
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;
