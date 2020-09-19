const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 32
        },
        description:
        {
            type: String,
            required: true,
            trim: true,
            maxlength: 2000
        },
        price : 
        {
            type : Number,
            required : true,
            maxlength : 32
        }
,
        category:{
            type : ObjectId,
            ref : "Category",
            required : true
        },
 stock : 
 {
type : Number
 },
 sold : 
 {
type : Number,
default : true
 },
 photo :
 {
     data : Buffer,
     contentType : String
 },
size : 
{
type : String,
maxlength : 3
},


    },

    {
        timestamps: true
    }
)

module.exports = mongoose.model("Product", productSchema);