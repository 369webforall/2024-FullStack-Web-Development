import React, { useState } from "react";

function Home() {
  // Declare a state variable named 'inputValue', initialized to an empty string
  const [inputValue, setInputValue] = useState("");

  // Handle change event for the input field
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default Home;
