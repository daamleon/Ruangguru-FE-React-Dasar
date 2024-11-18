import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./Routes/Home";
import Student from "./Routes/Student";
import AddStudent from "./Routes/AddStudent";
import EditStudent from "./Routes/EditStudent";
import NotFound from "./Routes/NotFound";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <NavBar />
      <Box flex="1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/student/:id" element={<EditStudent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
