const { VerifyToken, VerifyTokenAndAuth } = require("./VerifyToken");
const Cart = require("../models/cart");

const router = require('express').Router();

//create a new cart
router.post("/",VerifyToken, async(req,res)=>{
    const newCart = new Cart(req.body);
    
    try{
        const savedCart = await newCart.save();
        res.status(200).send(savedCart);
    }catch(err){
        res.status(400).send(err);
    }
});


//update cart
router.put("/:id",VerifyTokenAndAuth, async(req,res)=>{
    const { id } = req.params;
    const { cart } = req.body;
    try{
        const updatedCart = await Cart.findByIdAndUpdate(id,{$set:cart},{new:true});
        res.status(200).send(updatedCart);
    }catch(err){
        res.status(400).send(err);
    }

});
//delete cart
router.delete("/:id",VerifyTokenAndAuth, async(req,res)=>{
    try{
        const deletedCart = await Cart.findByIdAndDelete(req.params.id);
        res.status(200).send(deletedCart);
    }catch(err){
        res.status(400).send(err);
    }
});

//get cart
router.get("/find/:userId",VerifyTokenAndAuth, async(req,res)=>{
    try{
        const cart = await Cart.findOne({userId:req.params.userId});
        res.status(200).send(cart);
    }catch(err){
        res.status(400).send(err);
    }
});

//get all carts
router.get("/",VerifyTokenAndAuth, async(req,res)=>{
    try{
        const carts = await Cart.find();
        res.status(200).send(carts);
    }catch(err){
        res.status(400).send(err);
    }
});



module.exports = router;