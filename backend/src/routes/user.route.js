import express from 'express';
import { registerUser, LoginUser } from '../controllers/user.controller.js';

const userRoutes = express.Router();

userRoutes.post('/register', registerUser);
userRoutes.post('/login', LoginUser);

export default userRoutes;