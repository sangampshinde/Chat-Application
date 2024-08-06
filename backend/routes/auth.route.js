import express from 'express';

const router = express.Router();



// Routes

//login
router.get('/login',(req,res)=>{
    res.send("login");
});
// signup
router.get('/signup',(req,res)=>{
    res.send("login");
});
// logout
router.get('/logout',(req,res)=>{
    res.send("login");
});




export default router;

