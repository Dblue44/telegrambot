import { validationResult } from 'express-validator';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    next();
};