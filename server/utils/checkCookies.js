// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res, next) => {
    const { cookies } = req;
    if (!cookies) {
        return res.status(403).json({
            message: "Нет доступа"
        })
    }
    if (!(".ASPXAUTH" in cookies) || !("BPMCSRF" in cookies) || !("BPMLOADER" in cookies)){
        return res.status(403).json({
            message: "Нет доступа"
        })
    }
    next();
}
