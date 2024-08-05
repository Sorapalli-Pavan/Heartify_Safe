import React, { useState } from 'react';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    gender: 0,
    age: 0,
    education: 0,
    currentSmoker: 0,
    cigsPerDay: 0,
    BPMeds: 0,
    prevalentStroke: 0,
    prevalentHyp: 0,
    Diabetes: 0,
    totChol: 0,
    sysBP: 0,
    diaBP: 0,
    BMI: 0,
    HeartRate: 0,
    glucose: 0,
    TenYearCHD: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div>
      <h2>Patient Details Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Gender:
          <input type="number" name="gender" value={formData.gender} onChange={handleChange} />
        </label><br />
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label><br />
        <label>
          Education:
          <input type="number" name="education" value={formData.education} onChange={handleChange} />
        </label><br />
        {/* Include other input fields in a similar way */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PatientForm;
