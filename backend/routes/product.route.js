const express=require('express');
const productRouter=express.Router();
const {getAllProduct,createProduct,updateProduct,deleteProduct,getProductDetail}=require('./../controller/ProductControllers');
productRouter.get('/',getAllProduct);
productRouter.get('/:id',getProductDetail);
productRouter.post('/create',createProduct);
productRouter.patch('/update/:id',updateProduct);
productRouter.delete('/delete/:id',deleteProduct);
module.exports={
    productRouter
}