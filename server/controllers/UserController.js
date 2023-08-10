import axios from "axios";

axios.defaults.xsrfHeaderName = "BPMCSRF";
axios.defaults.xsrfCookieName = "BPMCSRF";
axios.defaults.withCredentials = true
axios.defaults.ForceUseSession = true
const instance = axios.create({
    baseURL: "https://dev-freshmarket.cloudbpm.ru",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8",
        "ForceUseSession": true
    },
});
export const login = async (req, res) => {
    try {
        const {data, headers} = await instance.post("/ServiceModel/AuthService.svc/Login", req.body)
            .catch((err) => {
                console.log(err)
            });
        if (data.Code !== 0) {
            return res.status(500).json({
                message: data.Message,
            });
        }
        const bpmcsrf = headers.get("set-cookie")[2].split(";")[0].split("=")[1];
        res.json({
            message: "Авторизация пройдена успешно",
            bpmcsrf: bpmcsrf,
            userId: ""
        });
    } catch (err) {
        res.status(500).json({
            message: 'Ошибка авторизации'
        });
    }
};