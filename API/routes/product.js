const {VerifyToken,VerifyTokenAndAuth,VerifyTokenAndAdmin} = require('./VerifyToken');
const CryptoJS = require('crypto-js');
const Product = require("../models/product");


const router = require('express').Router();



//create product
router.post("/", async(req,res)=>{
    const newProduct = new Product(req.body);
    
    try{
        const savedProduct = await newProduct.save();
        res.status(200).send(savedProduct);
    }catch(err){
        res.status(400).send(err);
    }
});


//update product
router.put("/:id",VerifyTokenAndAdmin, async(req,res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).send(updatedProduct);
    }catch(err){
        res.status(400).send(err);
    }

});

//delete product
router.delete("/:id",VerifyTokenAndAdmin, async(req,res)=>{
    try{
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).send(deletedProduct);
    }catch(err){
        res.status(400).send(err);
    }

});

//get single product 
router.get("/:id",async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).send(product);
    }catch(err){
        res.status(400).send(err);
    }

});

//get all products
router.get("/",async(req,res)=>{
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    try{
        let products ;
        if(queryNew){
            products = await Product.find().sort({createdAt:-1}).limit(1);
        }
        else if(queryCategory){
            products = await Product.find({
                categories:{
                    $in : [queryCategory]
                }});
        }
        else {
            products = await Product.find();
        }
        res.status(200).send(products);
    }catch(err){
        res.status(400).send(err);
    }   
}); 



module.exports = router;