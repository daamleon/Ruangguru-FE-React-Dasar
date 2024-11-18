import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/student");
  };

  return (
    <div>
      <h2>Welcome to the Student Portal</h2>
      <button onClick={handleClick} data-testid="student-btn">
        All Student
      </button>
    </div>
  );
};

export default Home;
