import API from "./api";

export const placeOrder = (data) => API.post("/orders", data);
export const getOrders = () => API.get("/orders");
export const cancelOrder = (id) => API.delete(`/orders/${id}`);