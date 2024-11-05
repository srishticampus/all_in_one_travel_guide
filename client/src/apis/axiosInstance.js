import axios from "axios";

const axiosInstance = axios.create({
  // server api
  // baseURL: 'http://hybrid.srishticampus.in/tourist_guide_api/',
  // local api
  baseURL: "http://localhost:8000/tourist_guide_api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
