import { body } from 'express-validator';
export const loginValidation = [
    body('UserName', 'Неверный формат логина').isLength({ min: 3 }),
    body('UserPassword', 'Неверный формат пароля').isLength({ min: 5 }),
];

export const caseCreateValidation = [
    body('theme', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
    body('problem', 'Введите текст статьи').isLength({ min: 5 }).isString(),
];