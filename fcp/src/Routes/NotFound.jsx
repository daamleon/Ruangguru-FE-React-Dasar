// NotFound.jsx
import React from "react";
import { Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Heading as="h2" mb={4}>
        404 - Page Not Found
      </Heading>
      <Button
        colorScheme="teal"
        onClick={handleGoHome}
        data-testid="go-home-btn"
      >
        Go to Home
      </Button>
    </div>
  );
};

export default NotFound;
