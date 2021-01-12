const category = require("./category");

var mongoose = require(mongoose);
const {ObjectID} = mongoose.Schema

const productSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required: true,
            maxlength:55,
            trim:true
        },
        description:{
            type:String,
            trim:true,
            required:true,
            maxlength:5000
        },
        price:{
            type:String,
            required:true,
            maxlength:32,
            trim:true
        },
        category:{
            type:ObjectID,
            ref:"Category",
            required:true
        },
        stock:{
            type: Number,
        },
        sold:{
            type: Number,
            default: 0
        },
        photo:{
            data: Buffer,
            contentType: String,
        }

    },{timeStamps:true}
);

module.exports = mongoose.model("Product",productSchema)