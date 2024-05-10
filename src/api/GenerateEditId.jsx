import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
function GenerateEditId() {
  const [formData, setFormData] = useState({
    packageName: "",
    accessToken: "",
    // Add more fields as needed
  });
  const [editId, setEditId] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("formData--> ", event.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("inputValue---> ", formData);
  };

  const handleEditId = () => {
    console.log("HandleEditID", formData);
    // Replace {packageName} with your actual package name
    let bearerToken = formData.accessToken;
    // Construct the URL
    const url = `https://androidpublisher.googleapis.com/androidpublisher/v3/applications/${formData.packageName}/edits`;

    // Prepare the request body
    const requestBody = {
      // Your request body data goes here
      // For example:
      // "someKey": "someValue"
    };

    // Make the POST request
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${bearerToken}`, // Replace YOUR_ACCESS_TOKEN with your actual access token
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data.id);
        setEditId(data.id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="container">
      <span className="label">Generate Edit Id</span>
      <div className="inputs">
        <TextField
          id="outlined-basic"
          label="Enter Package Name"
          variant="outlined"
          name="packageName"
          value={formData.packageName}
          onChange={handleInputChange}
          className="input-field"
        />
        <TextField
          id="outlined-basic"
          label="Enter Access Token Name"
          variant="outlined"
          name="accessToken"
          value={formData.accessToken}
          onChange={handleInputChange}
          className="input-field"
        />
        <div style={{ margin: "15px" }}>
          <button
            style={{
              backgroundColor: "#bebebec2",
              color: "#000000",
              border: "none",
              borderRadius: "5px",
              marginBottom: "20px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
            onClick={handleEditId}
          >
            Click Me
          </button>
        </div>
        <span className="label">This is your edit id: {editId}</span>
      </div>
    </div>
  );
}

export default GenerateEditId;
