import axios from "axios";
const url = "http://localhost:5000";
const API = axios.create({
  baseURL: url,
  headers: { "Content-Type": "application/json" },
});

export default API;
