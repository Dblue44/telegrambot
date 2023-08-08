import axios from "axios";

const instance = axios.create({
    baseURL: "https://dev-freshmarket.cloudbpm.ru", //process.env.REACT_APP_API_URL,
    headers: {"ForceUseSession": "true",
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8",
    }
});

instance.interceptors.request.use((config) => {
    config.headers.BPMCSRF = window.localStorage.getItem("BPMCSRF");
    return config;
});
export default instance;
