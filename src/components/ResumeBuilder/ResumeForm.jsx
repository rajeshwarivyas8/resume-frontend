// components/ResumeBuilder/ResumeForm.jsx
import React from 'react';
import PersonalInfoForm from './FormSections/PersonalInfoForm';
import SummaryForm from './FormSections/SummaryForm';
import ExperienceForm from './FormSections/ExperienceForm';
import EducationForm from './FormSections/EducationForm';
import SkillsForm from './FormSections/SkillsForm';
import ProjectsForm from './FormSections/ProjectsForm';

const ResumeForm = ({
  resumeData,
  activeSection,
  setActiveSection,
  updateResumeData,
  addArrayItem,
  removeArrayItem,
  updateArrayItem
}) => {
  const sections = [
    { id: 'personal', label: 'Personal Info', icon: '👤' },
    { id: 'summary', label: 'Summary', icon: '📝' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' }
  ];

  const renderActiveForm = () => {
    switch (activeSection) {
      case 'personal':
        return (
          <PersonalInfoForm
            data={resumeData.personalInfo}
            updateData={(data) => updateResumeData('personalInfo', data)}
          />
        );
      case 'summary':
        return (
          <SummaryForm
            data={resumeData.summary}
            updateData={(data) => updateResumeData('summary', data)}
          />
        );
      case 'experience':
        return (
          <ExperienceForm
            data={resumeData.experience}
            addItem={(item) => addArrayItem('experience', item)}
            removeItem={(index) => removeArrayItem('experience', index)}
            updateItem={(index, item) => updateArrayItem('experience', index, item)}
          />
        );
      case 'education':
        return (
          <EducationForm
            data={resumeData.education}
            addItem={(item) => addArrayItem('education', item)}
            removeItem={(index) => removeArrayItem('education', index)}
            updateItem={(index, item) => updateArrayItem('education', index, item)}
          />
        );
      case 'skills':
        return (
          <SkillsForm
            data={resumeData.skills}
            updateData={(data) => updateResumeData('skills', data)}
          />
        );
      case 'projects':
        return (
          <ProjectsForm
            data={resumeData.projects}
            addItem={(item) => addArrayItem('projects', item)}
            removeItem={(index) => removeArrayItem('projects', index)}
            updateItem={(index, item) => updateArrayItem('projects', index, item)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="resume-form">
      <div className="form-navigation">
        {sections.map(section => (
          <button
            key={section.id}
            className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="nav-icon">{section.icon}</span>
            <span className="nav-label">{section.label}</span>
          </button>
        ))}
      </div>
      
      <div className="form-content">
        {renderActiveForm()}
      </div>
    </div>
  );
};

export default ResumeForm;
