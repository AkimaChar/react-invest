import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.REACT_APP_ENV === "production"
      ? process.env.REACT_APP_API_URL_ORIGIN
      : process.env.REACT_APP_API_URL_DEV,
  responseType: "json",
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("access token");
  config.headers.Authorization = `Bearer ${token}`;
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
});

instance.interceptors.response.use(data => {
  if (data.status === 401) {
    console.log("NOT AUTH");
  }
  return data;
});

export default instance;
