import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div style={styles.card}>
      <h4>Order ID: {order.id}</h4>
      <p>Status: {order.status}</p>
      <p>Total: ₹ {order.total}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #aaa",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px"
  }
};

export default OrderCard;