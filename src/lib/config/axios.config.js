import axios from "axios";
// console.log(process.env.REACT_APP_API_URL);

axios.defaults.baseURL = process.env.REACT_APP_API_URL


 axios.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("token");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

export default axios;