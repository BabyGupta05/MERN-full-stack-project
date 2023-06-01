const {productModel}=require('./../models/ProductModel')
// create product - Admin
exports.createProduct=async(req,res)=>{
   const newProduct=await productModel.create(req.body);
    res.status(201).json({
        success:true,
        newProduct
    })
}
// update product - Admin
exports.updateProduct=async(req,res)=>{
   const Product=await productModel.findById(req.params.id);
    if(!Product){
        return res.status(500).send({success:false,message:"please enter valid id"});
    }
    const updateProduct=await productModel.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    if (!updateProduct) {
        return res.status(500).send({ success: false, message: "Please enter a valid id" });
    }
    
    return res.status(200).send({success:true,updateProduct});
}
// delete product - Admin
exports.deleteProduct=async(req,res)=>{
   const Product=await productModel.findById(req.params.id);
    if(!Product){
        return res.status(500).send({success:false,message:"please enter valid id"});
    }
    await productModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({success:true,message:"product deleted "});
}
//single product
exports.getProductDetail=async(req,res,nxt)=>{
   const Product=await productModel.findById(req.params.id);
    if(!Product){
        return res.status(500).send({success:false,message:"please enter valid id"});
    }
    await productModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({success:true,Product});
}
//get product
exports.getAllProduct=async(req,res)=>{
    const products=await productModel.find();
    res.status(200).send({  success:true,
        products});
}