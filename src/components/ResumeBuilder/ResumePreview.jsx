// components/ResumeBuilder/ResumePreview.jsx

import React from "react";
import ModernTemplate from "./Templates/ModernTemplate";

const ResumePreview = ({ resumeData, template }) => {
  const renderTemplate = () => {
    switch (template) {
      default:
        return <ModernTemplate data={resumeData} />;
    }
  };

  return (
    <div className="preview-wrapper">
      
      {/* Header */}
      <div className="preview-header">
        <h3>Preview</h3>
      </div>

      {/* IMPORTANT: This ID is used for PDF download */}
      <div className="preview-content">
        <div className="resume-paper" id="resume-preview">
          {renderTemplate()}
        </div>
      </div>

    </div>
  );
};

export default ResumePreview;

