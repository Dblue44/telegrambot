import fs from 'fs';
import cors from 'cors';
import multer from 'multer';
import express from 'express';
import mongoose from 'mongoose';

import { UserController, PostController } from './controllers/index.js';
import { handleValidationErrors, checkAuth } from './utils/index.js';
import { loginValidation, caseCreateValidation } from './validations.js';

mongoose.connect('mongodb://127.0.0.1:27017/Users')
    .then(() => {console.log('DB Connect')})
    .catch((err) => {console.log('DB Error: ', err)});

const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        if (!fs.existsSync('uploads')) {
            fs.mkdirSync('uploads');
        }
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
//app.get('/auth/me', checkAuth, UserController.getMe);
app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, caseCreateValidation, handleValidationErrors, PostController.create);

app.listen(3002, (err) => {
    if (err) {
        console.log("ERROR: ", err);
    }
    console.log("SERVER STARTED");
});