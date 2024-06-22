const express = require('express');
const router = express.Router();
const {join} = require('path');
const {sendMessage} = require(join(__dirname, '..', 'help', 'help.js'));
const Text = require(join(__dirname, '..', 'schema', 'text.js'));



router.post('/', (req, res) => {
   try {
      if(!req.body){
         return sendMessage(res, false, 'req.body alanında bir hata oluştu!')
      }

      const {id} = req.body
      if(!id){
         return sendMessage(res, false, 'Veri iletilemedi!')
      }

      if(id.length !== 24){
         return sendMessage(res, false, 'Veri bulunamadı!')
      }

      Text.findByIdAndDelete(id).then((e)=>{
         return sendMessage(res, true, e);
      }).catch((err)=>{
         console.log(err);
         return sendMessage(res, false, 'Bir hata oluştu!');
      })


   } catch (error) {
      console.log(error)
      return sendMessage(res, false, 'Beklenilmeyen bir hata oluştu!');
   }
})


module.exports = router