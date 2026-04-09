import React from "react";
import MenuItem from "../components/MenuItem";

const MenuPage = () => {
  const menuItems = [
    { id: 1, name: "Burger", price: 150 },
    { id: 2, name: "Pizza", price: 250 },
    { id: 3, name: "Fries", price: 100 }
  ];

  return (
    <div>
      <h2>Menu</h2>
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuPage;