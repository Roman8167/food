const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
   category:{
       type:String,
       required:true
   },
   orders:{
       type:Number,
       required:true
   }

});
module.exports = mongoose.model("post-admin",postSchema)