import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div style={styles.card}>
      <h3>{restaurant.name}</h3>
      <button style={styles.button}>View Menu</button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    margin: "10px",
    width: "200px",
    textAlign: "center"
  },
  button: {
    marginTop: "10px",
    padding: "5px 10px",
    cursor: "pointer"
  }
};

export default RestaurantCard;