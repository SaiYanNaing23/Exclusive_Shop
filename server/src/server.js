import 'dotenv/config';
import cors from "cors";
import express from "express";
import authRoutes from "./routes/auth.routes.js"
import cookieParser from 'cookie-parser';
import { connectDB } from './libs/db.js';

// Configuration
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:3333",
    credentials: true,
}));

// Routes
app.use("/api/auth", authRoutes)

// Error Handling
app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).json({ message : process.env.NODE_ENV === 'production' ? "Internal Server Error" : err.message});
} )

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
    connectDB()
})