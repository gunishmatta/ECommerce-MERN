const product = require('../models/product');
const Product = require('../models/product');
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

exports.getProductById = (req, res, next, id) => {
    Product.findById({ id }).populate("category")  //populate products based on category only
        .exec((err, product) => {
            if (err) {
                return res.status.json(
                    {
                        error: "Product Not found"
                    }
                )
            }

            res.product = product;
            next();
        })
}

exports.createProduct =(req,res)=>
{
let form = new formidable.IncomingForm();

form.keepExtensions = true;

form.parse(req,(err,fields,file)=>
{
    if(err)
    {
        res.status(400).json(
            {
                error:"Problem with Image file"
            }
        )}
//destructure the fields
const {name,price,description,category,stock} = fields;

if(!name || !description || !price || !category || !stock)
{
    return res.status(400).json(
        {
            error:"Please include all fields"
        }
    )
}

 

let product = new Product(fields);
//handle file
if(file.photo)
{
    if(file.photo.size>3000000)
    {
        return res.status(400).json(
            {
                error:"File size larger than 3 Mb"
            }
        )
    }

product.photo.data = fs.readFileSync(file.photo.path)
product.photo.contentType = file.photo.contentType
}
//save to db
product.save((err,product)=>
{
if(err)
{
    return res.status(400).json(
        {
            error:"Error saving product image to system"
        }
    )
}

res.json(product);

})
})


}



exports.getProduct=(req,res)=>
{
    req.product.photo = undefined;
    return res.json(req.product)
}


//middleware
exports.photo = (req,res,next)=>
{
    if(req.product.photo.data)
    {
        res.set("Content-Type",req.product.photo.contentType)
        return res.send(req.product.photo.data)

    }
 
}

exports.updateProduct = (req,res)=>
{
 

let form = new formidable.IncomingForm();

form.keepExtensions = true;

form.parse(req,(err,fields,file)=>
{
    if(err)
    {
        res.status(400).json(
            {
                error:"Problem with Image file"
            }
        )}

//updation code
let product = req.product;

product = _.extend(product,fields)

//handle file
if(file.photo)
{
    if(file.photo.size>3000000)
    {
        return res.status(400).json(
            {
                error:"File size larger than 3 Mb"
            }
        )
    }

product.photo.data = fs.readFileSync(file.photo.path)
product.photo.contentType = file.photo.contentType
}
//save to db
product.save((err,product)=>
{
if(err)
{
    return res.status(400).json(
        {
            error:"Error updating product image to system"
        }
    )
}

res.json(product);

})
})

    




}

exports.deleteProduct = (req,res)=>
{
let product = req.product;
product.remove((err,deletedProduct)=>
{
    if(err)
    {
        return res.status(400).json(
            {
                error :"Failed to delete the product"
            }
        )
    }

res.json(
    {
        message : `Deleted ${deletedProdcut}`
    }
)


})
}