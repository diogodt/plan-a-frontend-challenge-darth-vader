import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {`{{  Darth Trindade Vader  }}`}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
