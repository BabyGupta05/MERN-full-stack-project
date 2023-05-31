const mongoose=require('mongoose');
const productSchema=mongoose.Schema(
   { name:{
        required:[true,"Please enter product name"],
        type:String
    },
    description:{
        required:[true,"Please enter product description"],
        type:String
    },
    price:{
        type:Number,
        required:[true,"Please enter product description"],
        maxLength:[8,"Price can't exceed 8 character"]
    },
    rating:{
        type:Number,
        default:0,

    },
    images:[
       { public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }}
    ],
    category:{
        type:String,
        required:true,
    },
    stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxLength:[4,"stock cannot exceed 4 character"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0,
    },
    reviews:[{
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        },
        Comment:{
            type:String,
            required:true
        }
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    }
}
)

const productModel=mongoose.model("product",productSchema);

module.exports={
    productModel
}