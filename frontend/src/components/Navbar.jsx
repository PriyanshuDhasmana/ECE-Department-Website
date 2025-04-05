import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>ECE Dept</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/staff" style={styles.link}>Staff</Link>
        <Link to="/alumni" style={styles.link}>Alumni Connect</Link>
        <Link to="/elsoc" style={styles.link}>ELSOC</Link>
        {isLoggedIn && <Link to="/dashboard" style={styles.link}>Dashboard</Link>}
        {!isLoggedIn ? (
          <Link to="/login" style={styles.link}>Login</Link>
        ) : (
          <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#282c34",
  },
  logo: {
    color: "#fff",
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  logoutButton: {
    background: "none",
    border: "none",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Navbar;
