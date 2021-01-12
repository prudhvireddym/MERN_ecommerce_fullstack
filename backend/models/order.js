const mongoose = require("mongoose");
const {ObjectID} = mongoose.Schema;

const productCartSchema  = new mongoose.Schema({
    product: {
        type: ObjectID,
        ref:"Product"
    },
    name: String,
    count:Number,
    price:Number
});

const ProductCart = mongoose.model("ProductCart",productCartSchema)

const orderSchema = new mongoose.Schema({
    products:[productCartSchema],
    transaction_id :{},
    amount: {type:Number},
    address:String,
    updated:Date,
    user:{
        type:ObjectID,
        ref:"User"
    }
},{timestamps:true})

const ProductCart = mongoose.model("ProductCart",ProductCartSchema)

const Order = mongoose.model("Order",orderSchema)
