
export  const sendMessage = async (req,res)=>{
    try {
        const { message } = req.body;
        const {id} = req.params;
        

        
    } catch (error) {
        console.error( "sendMessage Controller",error.messsage);
        res.status(500).json({error:"Internal server error"});
    }


}