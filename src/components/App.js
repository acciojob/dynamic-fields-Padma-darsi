import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  // Add new field
  const handleAddField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  // Remove specific field
  const handleRemoveField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  // Handle input change
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFields = [...fields];
    updatedFields[index][name] = value;
    setFields(updatedFields);
  };

  // Submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleInputChange(index, e)}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleInputChange(index, e)}
            />
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddField}>
          Add More
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
