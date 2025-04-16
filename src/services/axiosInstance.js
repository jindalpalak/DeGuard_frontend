import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://17.224.110.158/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data?.status === 0) {
      const errorMessage = response.data?.message || "Something went wrong";
      return Promise.reject(new Error(errorMessage));
    }
    return response;
  },
);

export default axiosInstance;
