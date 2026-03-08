import React, { useState } from "react";

const EducationForm = ({ data, addItem, removeItem, updateItem }) => {
  const [newEdu, setNewEdu] = useState({
    degree: "",
    school: "",
    graduationDate: "",
    location: "",
    gpa: ""
  });

  const handleAdd = () => {
    if (newEdu.degree && newEdu.school) {
      addItem(newEdu);
      setNewEdu({
        degree: "",
        school: "",
        graduationDate: "",
        location: "",
        gpa: ""
      });
    }
  };

  return (
    <div className="form-section">
      <h3>Education</h3>

      {data.map((edu, index) => (
        <div key={index} className="experience-item">
          <h4>{edu.degree} - {edu.school}</h4>
          <button onClick={() => removeItem(index)}>❌</button>
        </div>
      ))}

      <div className="add-new-section">
        <input
          placeholder="Degree"
          value={newEdu.degree}
          onChange={(e) => setNewEdu({...newEdu, degree: e.target.value})}
        />
        <input
          placeholder="School"
          value={newEdu.school}
          onChange={(e) => setNewEdu({...newEdu, school: e.target.value})}
        />
        <button onClick={handleAdd}>Add Education</button>
      </div>
    </div>
  );
};

export default EducationForm;
