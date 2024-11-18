// Footer.jsx
import React from "react";
import { Box } from "@chakra-ui/react";
import { url, studentName, studentId } from "../Task";

const Footer = () => {
  return (
    <Box className="footer" data-testid="footer">
      <p className="url">{url}</p>
      <p className="studentName">{studentName}</p>
      <p className="studentId">{studentId}</p>
    </Box>
  );
};

export default Footer;
