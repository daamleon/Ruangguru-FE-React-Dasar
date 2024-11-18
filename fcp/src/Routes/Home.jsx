// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Heading, Box } from "@chakra-ui/react"; // Import komponen dari Chakra UI

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/student");
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Welcome to the Student Portal
      </Heading>
      <Button
        colorScheme="teal"
        onClick={handleClick}
        data-testid="student-btn"
      >
        All Student
      </Button>
    </Box>
  );
};

export default Home;
