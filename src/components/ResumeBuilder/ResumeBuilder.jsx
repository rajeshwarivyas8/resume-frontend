// components/ResumeBuilder/ResumeBuilder.jsx

import React, { useState } from "react";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";
import html2pdf from "html2pdf.js";
import "./ResumeBuilder.css";

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      github: "",
      website: "",
    },
    summary: "",
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
  });

  const [selectedTemplate] = useState("modern");
  const [activeSection, setActiveSection] = useState("personal");

  const updateResumeData = (section, data) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const addArrayItem = (section, item) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: [...prev[section], item],
    }));
  };

  const removeArrayItem = (section, index) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  const updateArrayItem = (section, index, updatedItem) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? updatedItem : item
      ),
    }));
  };

  // ✅ DOWNLOAD FUNCTION
  const handleDownload = () => {
    const element = document.getElementById("resume-preview");

    const opt = {
      margin: 0.5,
      filename: "My_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="resume-builder">
      <div className="builder-header">
        <h1>Resume Builder</h1>

        {/* ✅ DOWNLOAD BUTTON */}
        <button className="download-btn" onClick={handleDownload}>
          Download CV
        </button>
      </div>

      <div className="builder-content">
        <div className="form-section">
          <ResumeForm
            resumeData={resumeData}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            updateResumeData={updateResumeData}
            addArrayItem={addArrayItem}
            removeArrayItem={removeArrayItem}
            updateArrayItem={updateArrayItem}
          />
        </div>

        <div className="preview-section">
          <ResumePreview
            resumeData={resumeData}
            template={selectedTemplate}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;

