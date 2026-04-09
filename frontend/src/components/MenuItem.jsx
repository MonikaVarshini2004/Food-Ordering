import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div style={styles.card}>
      <h4>{item.name}</h4>
      <p>₹ {item.price}</p>
      <button style={styles.button}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "8px",
    margin: "10px"
  },
  button: {
    padding: "5px 10px",
    cursor: "pointer"
  }
};

export default MenuItem;