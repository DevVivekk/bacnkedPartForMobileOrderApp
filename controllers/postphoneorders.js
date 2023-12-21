const phoneorder = require("../model/phoneorders");
const ErrorHandler = require("../utils/errorHandler");

const PhoneOrder = async(req,res,next)=>{
    try{
        //const {name,email,mobile,address,orders} = req.body;
        console.log("hit");
        console.log(req.body);
        let count = 0
        if(count===0){
        const saveit = await phoneorder({orders:req.body}).save();
        count++;
        return next(new ErrorHandler("Products addedd",201,true))
        }
    }catch(e){
        console.log(e);
    }
}
module.exports = PhoneOrder;