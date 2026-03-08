// components/ResumeBuilder/FormSections/ExperienceForm.jsx
import React, { useState } from 'react';

const ExperienceForm = ({ data, addItem, removeItem, updateItem }) => {
  const [newExperience, setNewExperience] = useState({
    jobTitle: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  });

  const handleAdd = () => {
    if (newExperience.jobTitle && newExperience.company) {
      addItem(newExperience);
      setNewExperience({
        jobTitle: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      });
    }
  };

  return (
    <div className="form-section">
      <h3>Work Experience</h3>
      
      {/* Existing Experience Items */}
      {data.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="item-header">
            <h4>{exp.jobTitle} at {exp.company}</h4>
            <button 
              className="remove-btn"
              onClick={() => removeItem(index)}
            >
              ❌
            </button>
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Job Title *</label>
              <input
                type="text"
                value={exp.jobTitle}
                onChange={(e) => updateItem(index, { ...exp, jobTitle: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Company *</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateItem(index, { ...exp, company: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) => updateItem(index, { ...exp, location: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) => updateItem(index, { ...exp, startDate: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="month"
                value={exp.endDate}
                disabled={exp.current}
                onChange={(e) => updateItem(index, { ...exp, endDate: e.target.value })}
              />
            </div>
            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={exp.current}
                  onChange={(e) => updateItem(index, { 
                    ...exp, 
                    current: e.target.checked,
                    endDate: e.target.checked ? '' : exp.endDate
                  })}
                />
                Currently working here
              </label>
            </div>
            <div className="form-group full-width">
              <label>Description</label>
              <textarea
                value={exp.description}
                onChange={(e) => updateItem(index, { ...exp, description: e.target.value })}
                placeholder="• Describe your responsibilities and achievements&#10;• Use bullet points for better readability&#10;• Include quantifiable results when possible"
                rows="4"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Add New Experience */}
      <div className="add-new-section">
        <h4>Add New Experience</h4>
        <div className="form-grid">
          <div className="form-group">
            <label>Job Title *</label>
            <input
              type="text"
              value={newExperience.jobTitle}
              onChange={(e) => setNewExperience({...newExperience, jobTitle: e.target.value})}
              placeholder="Software Developer"
            />
          </div>
          <div className="form-group">
            <label>Company *</label>
            <input
              type="text"
              value={newExperience.company}
              onChange={(e) => setNewExperience({...newExperience, company: e.target.value})}
              placeholder="Tech Company Inc."
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={newExperience.location}
              onChange={(e) => setNewExperience({...newExperience, location: e.target.value})}
              placeholder="New York, NY"
            />
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <input
              type="month"
              value={newExperience.startDate}
              onChange={(e) => setNewExperience({...newExperience, startDate: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input
              type="month"
              value={newExperience.endDate}
              disabled={newExperience.current}
              onChange={(e) => setNewExperience({...newExperience, endDate: e.target.value})}
            />
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={newExperience.current}
                onChange={(e) => setNewExperience({
                  ...newExperience,
                  current: e.target.checked,
                  endDate: e.target.checked ? '' : newExperience.endDate
                })}
              />
              Currently working here
            </label>
          </div>
        </div>
        <button className="add-btn" onClick={handleAdd}>
          Add Experience
        </button>
      </div>
    </div>
  );
};

export default ExperienceForm;
