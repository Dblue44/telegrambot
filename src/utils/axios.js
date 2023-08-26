import axios from "axios";
axios.defaults.xsrfHeaderName = "bpmcsrf";
axios.defaults.headers.common["ForceUseSession"] = true;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
axios.defaults.withCredentials = true

const instance = axios.create({
    baseURL: "https://telegram-backend-of4dgx3vy-dblue44.vercel.app", //process.env.REACT_APP_API_URL,
});
export const setBPMCSRF = (bpmcsrf) => {
    instance.defaults.headers.common['BPMCSRF'] = bpmcsrf;
};
export default instance;
