import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/User.routes.js';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
