import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantList from "./pages/RestaurantList";
import MenuPage from "./pages/MenuPage";
import OrderHistory from "./pages/OrderHistory";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RestaurantList />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/orders" element={<OrderHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;