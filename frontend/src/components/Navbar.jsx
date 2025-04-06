import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          ECE <span className="dept">Dept</span>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/staff">Staff</Link>
          <Link to="/alumni">Alumni Connect</Link>
          <Link to="/elsoc">ELSOC</Link>
          {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
          {!isLoggedIn ? (
            <Link to="/login" className="login-btn">Login</Link>
          ) : (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
