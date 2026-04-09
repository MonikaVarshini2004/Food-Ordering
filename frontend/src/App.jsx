import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing the new pages and components
import RestaurantList from "./pages/RestaurantList";
import MenuPage from "./pages/MenuPage";
import OrderHistory from "./pages/OrderHistory";
import Navbar from "./components/Navbar";

// Importing from your previous setup (App.js)
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      {/* Assuming you want Navbar on all pages, if not, you can move it */}
      <Navbar />
      <Routes>
        <Route path="/" element={<RestaurantList />} />
        <Route path="/menu" element={<MenuPage />} />
        
        {/* Your previous login logic */}
        <Route path="/login" element={<h1>Login Page</h1>} />

        {/* Your previous protected route logic applied to the new OrderHistory page */}
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
