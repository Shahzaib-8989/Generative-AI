import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});
export const generateImage = (prompt) =>
  API.post("/generate-image", { prompt });
export const createPost = (name, prompt, photo) =>
  API.post("/posts", { name, prompt, photo });
export const getAllPosts = (searchQuery = '') => {
  const params = searchQuery.trim() ? { search: searchQuery } : {};
  return API.get("/posts", { params });
};
export default API;
