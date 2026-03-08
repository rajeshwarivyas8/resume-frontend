import React, { useState } from "react";

const SkillsForm = ({ data, updateData }) => {
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    if (skillInput.trim() !== "") {
      updateData([...data, skillInput]);
      setSkillInput("");
    }
  };

  const removeSkill = (index) => {
    updateData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="form-section">
      <h3>Skills</h3>

      <div>
        {data.map((skill, index) => (
          <span key={index} style={{ marginRight: "10px" }}>
            {skill} ❌
            <button onClick={() => removeSkill(index)}>x</button>
          </span>
        ))}
      </div>

      <input
        type="text"
        value={skillInput}
        onChange={(e) => setSkillInput(e.target.value)}
        placeholder="Add a skill"
      />
      <button onClick={addSkill}>Add</button>
    </div>
  );
};

export default SkillsForm;
