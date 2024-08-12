import express from 'express';
import {signup,login,logout } from '../controllers/auth.controllers.js';

const router = express.Router();



// Routes

//login
router.post('/login',login);
// signup
router.post('/signup',signup);
// logout
router.post('/logout',logout);




export default router;

