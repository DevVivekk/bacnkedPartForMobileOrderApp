const mongoose = require("mongoose")
const mongooseSchema = new mongoose.Schema({
    phone_name:{
        type:String
    },
    phone_price:{
        type:Number
    },
    phone_type:{
        type:String
    },
    phone_processor:{
        type:String
    },
    phone_os:{
        type:String
    },
    phone_image:{
        type:String
    }
})
const phonemodel = mongoose.model('PhoneOrder',mongooseSchema);
module.exports= phonemodel;