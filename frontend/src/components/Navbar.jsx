import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>ECE Dept</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/staff" style={styles.link}>Staff</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/alumni" style={styles.link}>Alumni Connect</Link>
        <Link to="/elsoc" style={styles.link}>ELSOC</Link>
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
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;
