import User from "../models/user.model.js";
export const signup = (req,res)=>{
    try {
        const { fullName,username,password,conformPassword,gender, } = req.body;

        if(password !== conformPassword) {


        }

        
    } catch (error) {
        
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