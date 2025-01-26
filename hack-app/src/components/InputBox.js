import React, { useState } from "react";

function InputBox() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    // Create a Blob object from the text
    const blob = new Blob([text], { type: "text/plain" });

    // Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a temporary link element
    const a = document.createElement("a");
    a.href = url;
    a.download = "saved_text.txt"; // File name
    document.body.appendChild(a);

    // Programmatically click the link to trigger the download
    a.click();

    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert("Text saved to 'saved_text.txt'");
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter text here..."
        value={text}
        onChange={handleTextChange}
        style={{
          width: "100%",
          marginBottom: "10px",
          border: "none", // No border
          backgroundColor: "transparent", // Transparent background
          outline: "none", // No outline when focused
          color: "#fff", // White text
          fontSize: "16px", // Text size
          padding: "10px", // Padding for better spacing
        }}
      />
      <br />
      <button
        onClick={handleSave}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#004b8d", // Match the theme color
          color: "#fff", // Button text color
          border: "none", // Remove button border
          borderRadius: "5px", // Rounded corners
          fontWeight: "bold",
        }}
      >
        Save Text
      </button>
    </div>
  );
}

export default InputBox;