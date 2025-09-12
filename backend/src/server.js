import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/db.js';
import authRouter from './routes/user.route.js';
import cookieParser from 'cookie-parser';

dotenv.config({
    path: 'src/config/.env'
})


const app = express();

app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:[
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
    ],
    credentials: true,
}));

app.use(express.json());



// Routes

app.use('/api/auth', authRouter);

const port = process.env.PORT || 4000;

connectDB()

app.listen(port, () => console.log(`Server running on port ${port}`));