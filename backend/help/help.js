const sendMessage = (res, type, message)=>{
   res.json({
      type:type,
      message:message
   })
}



module.exports = {sendMessage}