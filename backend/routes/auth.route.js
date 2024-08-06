import express from 'express';
import { loginUser, logoutUser, signupUser } from '../controllers/auth.controllers.js';

const router = express.Router();



// Routes

//login
router.post('/login',loginUser);
// signup
router.post('/signup',signupUser);
// logout
router.post('/logout',logoutUser);




export default router;

