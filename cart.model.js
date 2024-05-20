const mongoose = require("mongoose");
const userModel=require("./user.model")
const cartSchema = mongoose.Schema({
   cartItemID:{type:String,required:true},
   userId:userModel,
   productName:{type:String,required:true},
   quantity:{type:Number,required:true},
   Price:{type:String,required:true},
});
const cartModel = mongoose.model("cart", cartSchema);
module.exports = cartModel;