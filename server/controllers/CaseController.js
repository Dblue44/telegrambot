import axios from "../axios.js"
// APLANA - c83055bc-eae5-452c-a8a5-64e2fc4f6f70
// ТЕСТОВАЯ ЗАПИСЬ CASE - 30c62ce1-b58b-4ad0-b9e6-0084d25accd2
export const getUserCases = async (req, res) => {
    try {
        const { data } = axios.get(`/0/ServiceModel/EntityDataService.svc/Collection1Collection(guid'${req.params.userId}')`).then(
            (resp) => {
                console.log(resp.data);
            }
        )
        console.log("Data: ", data);
        res.json({
            NONE: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить заявки',
        });
    }
};

export const getOne = async (req, res) => {
    try {
        res.json();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить статьи',
        });
    }
};

export const create = async (req, res) => {
    try {


        res.json();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать статью',
        });
    }
};