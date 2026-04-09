import React from "react";
import RestaurantCard from "../components/RestaurantCard";

const RestaurantList = () => {
  const restaurants = [
    { id: 1, name: "Pizza Hut" },
    { id: 2, name: "KFC" },
    { id: 3, name: "Dominos" }
  ];

  return (
    <div>
      <h2>Restaurants</h2>
      <div style={{ display: "flex" }}>
        {restaurants.map((res) => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;