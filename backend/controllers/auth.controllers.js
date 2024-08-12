import User from "../models/user.model.js";
import bcrypt from "bcryptjs";







export const signup = async (req,res)=>{
    try {
        const { fullName,username,password,conformPassword,gender, } = req.body;

        if(password !== conformPassword) {
            return res.status(400).json({error: "Passwords do not match."});
        }

        const user = await User.findOne({username});

        if(user) {
            return res.status(400).json({error: "Username already exists."});
        }

        // Hash the password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);





        // avtar profile image

        const boyprofilePic =`https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlprofilePic =`https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({ 
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === "male"? boyprofilePic : girlprofilePic,
         });

        if(newUser){
            // generate JWT token Here
            
            await newUser.save();

            res.status(201).json({
               _id:newUser._id,
               fullName: newUser.fullName,
               username: newUser.username,
               profilePic: newUser.profilePic,
              
            });
        }
        else{
            res.status(400).json({error: "Invalid user data"});  
        }
        
    } catch (error) {
        console.log("error in signup:", error.message); 
        res.status(500).json({error: "internal server error"});
        
    }

}


export const login = (req,res)=>{
    try {
        
    } catch (error) {
        
    }


}

export const logout = (req,res)=>{
    try {
        
    } catch (error) {
        
    }


}