import axios, {setBPMCSRF} from "../axios.js";

export const login = async (req, res) => {
    try {
        const { data, headers } = await axios.post("/ServiceModel/AuthService.svc/Login", req.body);

        if (data.Code !== 0) {
            return res.status(500).json({
                message: data.Message,
                status: "error"
            });
        }

        headers.get("set-cookie").forEach((cookie) => {
            const cookieName = cookie.split("=")[0];
            const cookieValue = cookie.split("=")[1];
            res.cookie(cookieName, cookieValue, {SameSite: false, secure: false});
        })
        const bpmcsrf = headers.get("set-cookie")[2].split(";")[0].split("=")[1];
        setBPMCSRF(bpmcsrf);
        // БРАТЬ ID КОНТАКТА!!!
        res.json({
            message: "Авторизация пройдена успешно",
            bpmcsrf: bpmcsrf,
            userId: "",
            status: "success"
        });
    } catch (err) {
        res.status(500).json({
            message: `Ошибка авторизации`,
            status: "error"
        });
    }
    console.log("RES: ", res.json, res.cookies);
};