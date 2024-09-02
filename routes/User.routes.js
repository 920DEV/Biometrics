// routes/User.routes.js
import express from 'express';
import { getUserByAadhar, createUser } from '../controllers/User.controller.js';
const router = express.Router();

router.get('/user/:aadharNo', getUserByAadhar);
router.post('/user', createUser);

export default router;