import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:3002", //process.env.REACT_APP_API_URL,
});
instance.interceptors.request.use((config) => {
    config.headers.BPMCSRF = window.localStorage.getItem("bpmcsrf");
    return config;
});
export default instance;
