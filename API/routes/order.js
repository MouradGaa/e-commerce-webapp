const { VerifyToken, VerifyTokenAndAuth, VerifyTokenAndAdmin } = require("./VerifyToken");
const Order = require("../models/order");

const router = require('express').Router();

//create a new order
router.post("/",VerifyToken, async(req,res)=>{
    const newOrder = new Order(req.body);
    
    try{
        const savedOrder = await newOrder.save();
        res.status(200).send(savedOrder);
    }catch(err){
        res.status(400).send(err);
    }
});


//update order
router.put("/:id",VerifyTokenAndAdmin, async(req,res)=>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).send(updatedOrder);
    }catch(err){
        res.status(400).send(err);
    }
});



 //delete order
router.delete("/:id",VerifyTokenAndAdmin, async(req,res)=>{
    try{
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        res.status(200).send(deletedOrder);
    }catch(err){
        res.status(400).send(err);
    }
});



//get user order
router.get("/find/:userId",VerifyTokenAndAuth, async(req,res)=>{
    try{
        const orders = await Order.find({userId:req.params.userId});
        res.status(200).send(orders);
    }catch(err){
        res.status(400).send(err);
    }
});


//get all orders
router.get("/",VerifyTokenAndAdmin, async(req,res)=>{
    try{
        const orders = await Order.find();
        res.status(200).send(orders);
    }catch(err){
        res.status(400).send(err);
    }
});



module.exports = router;