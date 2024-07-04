import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  return (
    <div>
      <h1>This is user page </h1>
      <h3>The user name is: {params.username}</h3>
    </div>
  );
};

export default User;
