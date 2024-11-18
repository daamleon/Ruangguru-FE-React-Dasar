// EditStudent.jsx
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

const EditStudent = () => {
  const [studentData, setStudentData] = useState({
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
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // TODO: Add the logic to handle the form submission
    console.log("Student data updated:", studentData);
    navigate("/student");
  };

  return (
    <Box>
      <Heading as="h2" mb={6}>
        Edit Student
      </Heading>
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          value={studentData.name}
          onChange={handleChange}
          placeholder="Enter student name"
          data-testid="name"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Address</FormLabel>
        <Input
          name="address"
          value={studentData.address}
          onChange={handleChange}
          placeholder="Enter student address"
          data-testid="address"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Phone Number</FormLabel>
        <Input
          name="phoneNumber"
          value={studentData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter student phone number"
          data-testid="phoneNumber"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Profile Picture</FormLabel>
        <Input
          name="profilePicture"
          value={studentData.profilePicture}
          onChange={handleChange}
          placeholder="Enter profile picture URL"
          data-testid="profilePicture"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Gender</FormLabel>
        <Input
          name="gender"
          value={studentData.gender}
          onChange={handleChange}
          placeholder="Enter gender"
          data-testid="gender"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Date of Birth</FormLabel>
        <Input
          name="date"
          value={studentData.date}
          onChange={handleChange}
          placeholder="Enter birth date"
          data-testid="date"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Program Study</FormLabel>
        <Input
          name="prody"
          value={studentData.prody}
          onChange={handleChange}
          placeholder="Enter program study"
          data-testid="prody"
        />
      </FormControl>
      <Button colorScheme="teal" onClick={handleSubmit} data-testid="edit-btn">
        Update Student
      </Button>
    </Box>
  );
};

export default EditStudent;
