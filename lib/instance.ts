import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

// instance.interceptors.request.use(async (config) => {
//   const data = window.localStorage.getItem("token");

//   if (data) {
//     config.headers.Authorization = `Bearer ${data}`;
//   }

//   return config;
// });

export default instance;
