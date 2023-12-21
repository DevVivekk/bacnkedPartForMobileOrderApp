const express = require("express");
const http = require("http");
const router = require("./routers/route");
const cors = require("cors")
const connectDb = require("./database/connectdb");
connectDb();
//const phonemodel = require("./model/phonedata"); phone list model
//const phonelist = require("./database/phonelist.json"); phone list array
const errorMiddleware = require('./middleware/myerrormiddleware');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/server/api',router);
app.use(errorMiddleware);
const myserver = http.createServer(app);
//add phone list to the collection
//phonemodel.create(phonelist);
myserver.listen(4000,()=>{
    console.log('Yay! Running on localhost4000')
});
