import { validationResult } from 'express-validator';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res, next) => {
    const errors = validationResult(req);
    const answer = {
        status: "error",
        errors: errors.array()
    }
    if (!errors.isEmpty()) {
        return res.status(400).json(answer);
    }

    next();
};