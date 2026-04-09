import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/orders">Orders</Link>
    </div>
  );
};

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#eee"
  }
};

export default Navbar;