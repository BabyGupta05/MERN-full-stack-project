const express=require('express');
const app=express();
app.use(express.json());

const {DBconnect}=require('./config/db')
const dotenv=require('dotenv');
dotenv.config({path:"backend/config/config.env"})
DBconnect();
const {productRouter}=require('./routes/product.route');
app.use('/product',productRouter);

app.listen(process.env.PORT,()=>{
    console.log(`server started at,${process.env.PORT}`);
})