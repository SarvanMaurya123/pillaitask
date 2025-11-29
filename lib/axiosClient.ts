import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error("Bad Request:", error.response.data);
          break;
        case 401:
          console.error("Unauthorized:", error.response.data);
          break;
        case 500:
          console.error("Server Error:", error.response.data);
          break;
        default:
          console.error("API Error:", error.response.data);
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Request setup error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
