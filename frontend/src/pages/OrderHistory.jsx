import React from "react";
import OrderCard from "../components/OrderCard";

const OrderHistory = () => {
  const orders = [
    { id: 101, status: "Delivered", total: 300 },
    { id: 102, status: "Pending", total: 150 },
    { id: 103, status: "Cancelled", total: 200 }
  ];

  return (
    <div>
      <h2>Order History</h2>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderHistory;