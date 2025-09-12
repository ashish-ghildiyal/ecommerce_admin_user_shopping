import express from 'express';
import { registerUser, LoginUser, AuthMiddleware,LogoutUser } from '../controllers/user.controller.js';

const userRoutes = express.Router();

userRoutes.post('/register', registerUser);
userRoutes.post('/login', LoginUser);
userRoutes.post('/logout',LogoutUser)

userRoutes.get('/check-auth', AuthMiddleware, (req,res)=>{
    const user = req.user;
    console.log(user)
    res.status(200).json({
        success:true,
        message: 'Authenticated User',
        user
    })
})

export default userRoutes;