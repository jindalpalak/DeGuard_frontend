import axios from "axios";

// Common response interceptor
const responseInterceptor = (response) => {
  if (response.data?.status === 0) {
    const errorMessage = response.data?.message || "Something went wrong";
    return Promise.reject(new Error(errorMessage));
  }
  return response;
};

const errorInterceptor = (error) => Promise.reject(error);

const tokenInterceptor = (error) => {
  if (error.response?.status === 401) {
    // Clear localStorage persist data
    localStorage.removeItem("persist:ai_root");

    // Optionally, you can also redirect to login
    window.location.href = "/login"; // Or use a navigate method if in React component
  }

  return Promise.reject(error);
};

// Instance without token
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://17.224.110.221/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(responseInterceptor, errorInterceptor);

// Instance with token
const axiosWithToken = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://17.224.110.221/api/",
  headers: { "Content-Type": "application/json" },
});

axiosWithToken.interceptors.request.use(
  (config) => {
    try {
      const persistRoot = localStorage.getItem("persist:ai_root");
      if (persistRoot) {
        const parsedRoot = JSON.parse(persistRoot);
        const auth = JSON.parse(parsedRoot.userDetail);
        const token = auth.accessToken;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    } catch (error) {
      console.error("Error reading token from storage", error);
    }

    return config;
  },
  errorInterceptor
);

axiosWithToken.interceptors.response.use(responseInterceptor, errorInterceptor);
axiosWithToken.interceptors.response.use(responseInterceptor, tokenInterceptor);

export { axiosInstance, axiosWithToken };
