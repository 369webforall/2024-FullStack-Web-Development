import React, { useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h1>This is user page </h1>
      <h3>The user name is: {params.username}</h3>

      <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
      <p>
        {" "}
        The button is {isOn ? "When true display ON" : "When false display OFF"}
      </p>
    </div>
  );
};

export default User;
