import axios from "axios";

const axiosInstance = axios.create({
  // server api
  // baseURL: 'http://hybrid.srishticampus.in/travel_guide_api/',
  // local api
  baseURL: "http://localhost:4050/travel_guide_api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
