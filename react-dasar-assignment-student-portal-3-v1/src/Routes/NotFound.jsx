import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>404 | Not Found</h1>
      <button onClick={handleBack} data-testid="back">
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
