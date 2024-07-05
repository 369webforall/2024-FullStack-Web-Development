import { useState } from "react";

const About = () => {
  // Initialize state with an object
  const [user, setUser] = useState({
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  });

  // Function to update the user's name
  const updateName = (newName) => {
    setUser((prev) => ({
      ...prev,
      name: newName,
    }));
  };

  // Function to update the user's age
  const updateAge = (newAge) => {
    setUser((prevUser) => ({
      ...prevUser,
      age: newAge,
    }));
  };

  // Function to update the user's email
  const updateEmail = (newEmail) => {
    setUser((prevUser) => ({
      ...prevUser,
      email: newEmail,
    }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>

      <button onClick={() => updateName("Jane Smith")}>Change Name</button>
      <button onClick={() => updateAge(35)}>Change Age</button>
      <button onClick={() => updateEmail("jane.smith@example.com")}>
        Change Email
      </button>
    </div>
  );
};

export default About;
