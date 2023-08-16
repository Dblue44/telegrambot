import axios from "axios";
axios.defaults.xsrfHeaderName = "BPMCSRF";
axios.defaults.xsrfCookieName = "BPMCSRF";
axios.defaults.headers.common["ForceUseSession"] = true;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";

const instance = axios.create({
    baseURL: "https://dev-freshmarket.cloudbpm.ru",
    withCredentials: true
});

export const setBPMCSRF = (bpmcsrf) => {
    instance.defaults.headers.common['BPMCSRF'] = bpmcsrf;
};

export default instance;