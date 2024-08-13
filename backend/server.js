import express from 'express';
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';

// routes imports
import authRoutes from '../backend/routes/auth.route.js'
import messagesRoutes from '../backend/routes/message.route.js'
import connectToMongooDB from './db/connectToMongoDB.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000

// postman middleware
app.use(express.json()); //to get data from req.body in JSON format.
app.use(cookieParser()); //to get data from cookie in JSON format





// middleware
app.use("/api/auth",authRoutes);
app.use("/api/messages",messagesRoutes);






app.listen(PORT,()=>{
    connectToMongooDB();
    console.log(`listening on on port ${PORT}`);
})