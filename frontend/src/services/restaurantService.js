import API from "./api";

export const getRestaurants = () => API.get("/restaurants");
export const getMenu = (id) => API.get(`/menu/${id}`);