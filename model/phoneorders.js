const mongoose = require("mongoose")
const mongooseSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:Number
    },
    address:{
        type:String
    },
    mobile:{
        type:String
    },
    Order_Date:{
        type:Date,
        default:new Date()
    },
    orders:[Object]
})
const phoneorder = mongoose.model('OrderListPhone',mongooseSchema);
module.exports= phoneorder;