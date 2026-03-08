import React from "react";

const SummaryForm = ({ data, updateData }) => {
  return (
    <div className="form-section">
      <h3>Professional Summary</h3>
      <div className="form-group full-width">
        <textarea
          value={data}
          onChange={(e) => updateData(e.target.value)}
          placeholder="Write a short professional summary..."
          rows="5"
        />
      </div>
    </div>
  );
};

export default SummaryForm;
