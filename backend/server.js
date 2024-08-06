import express from 'express';
import dotenv from "dotenv"


// routes imports
import authRoutes from '../backend/routes/auth.route.js'

dotenv.config();
const app = express();


const PORT = process.env.PORT || 5000


// middleware
app.use("/api/auth",authRoutes);








// 

















app.listen(PORT,()=>{
    console.log(`listening on on port ${PORT}`);
})