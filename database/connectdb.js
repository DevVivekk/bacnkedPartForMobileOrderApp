const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = async()=>{
return await mongoose.connect(process.env.Mongo,{useNewUrlParser: true, useUnifiedTopology: true }).then((res)=>console.log("connected")).catch((err)=>console.log(err));
}
module.exports =  connectDb;