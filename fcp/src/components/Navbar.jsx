// Navbar.jsx
import React from "react";
import { Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>
        <Link as={NavLink} to="/" data-testid="home-page" className="test-link">
          Student Portal
        </Link>
      </h1>
      <ul>
        <li>
          <Link
            as={NavLink}
            to="/student"
            data-testid="student-page"
            className="test-link"
          >
            All Student
          </Link>
        </li>
        <li>
          <Link
            as={NavLink}
            to="/add"
            data-testid="add-page"
            className="test-link"
          >
            Add Student
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
