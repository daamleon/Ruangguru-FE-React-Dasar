// Footer.jsx
import React from "react";
import { Box } from "@chakra-ui/react";
import { studentName, studentId } from "../Task";

const Footer = () => {
  return (
    <Box className="footer" data-testid="footer">
      <p className="studentName">{studentName}</p>
      <p className="studentId">{studentId}</p>
    </Box>
  );
};

export default Footer;
