import axios from "axios";
axios.defaults.headers.common["ForceUseSession"] = true;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
axios.defaults.withCredentials = true

const instance = axios.create({
    baseURL: "https://dev-freshmarket.cloudbpm.ru",
});

export const setNewAxios = (Cookies, bpmcsrf) => {
    instance.interceptors.request.use((config) =>{
        config.headers.set("Cookie", Cookies);
        config.headers.set("BPMCSRF", bpmcsrf);
        return config;
    })
};
export default instance;