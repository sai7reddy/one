const mongoose = require("mongoose");
const loginSchema = mongoose.Schema({
   
    email:{type:String,required:true},
   password:{type:String,required:true}
});
const loginModel = mongoose.model("product", loginSchema);
module.exports = loginModel;