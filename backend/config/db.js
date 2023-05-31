const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:"backend/config/config.env"})
const DBconnect=()=>{
    try {
        mongoose.connect(process.env.DB,{
            useNewUrlParser:true,useUnifiedTopology:true
        })
        console.log("MongoDB connected")
    } catch (error) {
        console.log("db.js",{error})
        rmSync.status(500).send("Internal server error");
    }
}
module.exports={
    DBconnect
}