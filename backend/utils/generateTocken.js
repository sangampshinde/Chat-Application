import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '15d' });

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000,//milisecond format
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE_ENV !== "development" 
    });
    

}

export default generateTokenAndSetCookie;










// random key generate command gitbash terminal
// openssl rand -base64 32