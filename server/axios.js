import axios from "axios";
axios.defaults.headers.common["ForceUseSession"] = true;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
axios.defaults.withCredentials = true

let instance = axios.create({
    baseURL: "https://dev-freshmarket.cloudbpm.ru",
});

export const setNewAxios = (Cookies, bpmcsrf) => {
    instance = axios.create({
        baseURL: "https://dev-freshmarket.cloudbpm.ru",
        headers: {
            "ForceUseSession": true,
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
            "Cookie": Cookies,
            "BPMCSRF": bpmcsrf
        }
    });
};
export default instance;