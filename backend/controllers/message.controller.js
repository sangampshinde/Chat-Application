import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export  const sendMessage = async (req,res)=>{
    try {
        const { message } = req.body;
        const { id:reciverId } = req.params;
        const { senderId } = req.user._id;

        console.log("senderId:", senderId);  // Debug: Check senderId value
        console.log("reciverId:", reciverId); // Debug: Check reciverId value
        console.log("message:", message);     // Debug: Check message value
        
       let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, reciverId]
            }
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, reciverId],
            });
            await conversation.save();
        }

        const newMessage = new Message({

            reciverId,
            senderId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
            await conversation.save();
        }

        await newMessage.save();

        res.status(201).json(newMessage);

        
    } catch (error) {
        console.error( "sendMessage Controller",error.messsage,error);
        res.status(500).json({error:"Internal server error"});
    }


}