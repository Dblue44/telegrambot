// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res, next) => {
    const token = (req.headers.bpmcsrf || "");
    if (!token) {
        return res.status(403).json({
            message: "Нет доступа",
            status: "error",
        })
    }
    next();
}