// AddStudent.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
  Box,
} from "@chakra-ui/react"; // Import Chakra UI components

const AddStudent = () => {
  const [newStudent, setNewStudent] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    profilePicture: "",
    gender: "",
    date: "",
    prody: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // TODO: Add the logic to handle form submission
    console.log("New student added:", newStudent);
    navigate("/student");
  };

  return (
    <Box>
      <Heading as="h2" mb={6}>
        Add New Student
      </Heading>
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          value={newStudent.name}
          onChange={handleChange}
          placeholder="Enter student name"
          data-testid="name"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Address</FormLabel>
        <Input
          name="address"
          value={newStudent.address}
          onChange={handleChange}
          placeholder="Enter student address"
          data-testid="address"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Phone Number</FormLabel>
        <Input
          name="phoneNumber"
          value={newStudent.phoneNumber}
          onChange={handleChange}
          placeholder="Enter student phone number"
          data-testid="phoneNumber"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Profile Picture</FormLabel>
        <Input
          name="profilePicture"
          value={newStudent.profilePicture}
          onChange={handleChange}
          placeholder="Enter profile picture URL"
          data-testid="profilePicture"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Gender</FormLabel>
        <Input
          name="gender"
          value={newStudent.gender}
          onChange={handleChange}
          placeholder="Enter gender"
          data-testid="gender"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Date of Birth</FormLabel>
        <Input
          name="date"
          value={newStudent.date}
          onChange={handleChange}
          placeholder="Enter birth date"
          data-testid="date"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Program Study</FormLabel>
        <Input
          name="prody"
          value={newStudent.prody}
          onChange={handleChange}
          placeholder="Enter program study"
          data-testid="prody"
        />
      </FormControl>
      <Button colorScheme="teal" onClick={handleSubmit} data-testid="add-btn">
        Add Student
      </Button>
    </Box>
  );
};

export default AddStudent;
