import React, { useState } from 'react';

function InputBox() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    const saveTextToFile = async () => {
      await write_to_file({
        path: 'saved_text.txt',
        content: text,
      });
      alert('Text saved to saved_text.txt');
    };

    saveTextToFile();
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter text here..."
        value={text}
        onChange={handleTextChange}
      />
      <br />
      <button onClick={handleSave}>Save Text</button>
    </div>
  );
}

export default InputBox;
