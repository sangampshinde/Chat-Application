import User from "../models/user.model.js";

export const loginUser = async (req, res) =>{
    try {
       
        
    } catch (error) {
        
    }

}

export const signupUser = async(req, res) =>{
    try {
        const {fullname,username,password,conformPassword,gender} = req.body

        if(password!== conformPassword){
            return res.status(400).json({error: 'Passwords do not match'});
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error: 'Username already exists'});
        }
        
        // Hash the password Here



        // random image from api for profile of user







    } catch (error) {
        
    }
    
}


export const logoutUser = (req, res) =>{
    try {
        
    } catch (error) {
        
    }
   
    
}