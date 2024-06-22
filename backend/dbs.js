const mongoose = require('mongoose');



const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017"


const conn = ()=>{
   mongoose.connect(DB_URL, {
      dbName:"todo"
   }).then(()=>{
      console.log('DB connected!')
   }).catch(err=>{
      console.log(`DB Error: ${err}`);
   })
}


module.exports = conn