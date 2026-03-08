import React, { useState } from "react";

const ProjectsForm = ({ data, addItem, removeItem }) => {
  const [newProject, setNewProject] = useState({
    name: "",
    description: ""
  });

  const handleAdd = () => {
    if (newProject.name) {
      addItem(newProject);
      setNewProject({ name: "", description: "" });
    }
  };

  return (
    <div className="form-section">
      <h3>Projects</h3>

      {data.map((project, index) => (
        <div key={index}>
          <h4>{project.name}</h4>
          <button onClick={() => removeItem(index)}>❌</button>
        </div>
      ))}

      <input
        placeholder="Project Name"
        value={newProject.name}
        onChange={(e) => setNewProject({...newProject, name: e.target.value})}
      />
      <textarea
        placeholder="Description"
        value={newProject.description}
        onChange={(e) => setNewProject({...newProject, description: e.target.value})}
      />
      <button onClick={handleAdd}>Add Project</button>
    </div>
  );
};

export default ProjectsForm;
