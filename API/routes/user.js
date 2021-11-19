const {VerifyToken,VerifyTokenAndAuth,VerifyTokenAndAdmin} = require('./VerifyToken');
const CryptoJS = require('crypto-js');
const User = require("../models/User");


const router = require('express').Router();


//update user
router.put("/:id",VerifyTokenAndAuth, async(req,res)=>{
   if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString();
  }

  try{
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body}, {new: true});
      console.log(req.body);
      res.status(200).json(updatedUser);
  }catch(err){
      res.status(400).send(err);
      console.log(err);
  }

});

//delete user
router.delete("/:id",VerifyTokenAndAuth, async(req,res)=>{
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedUser);
    }catch(err){
        res.status(400).send(err);
        console.log(err);
    }
});

//get user
router.get("/find/:id",VerifyTokenAndAdmin, async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password,...userWithoutPassword} = user._doc;
        res.status(200).json({...userWithoutPassword});
    }catch(err){
        res.status(400).send(err);
        console.log(err);
    }
});

//get all users
router.get("/",VerifyTokenAndAdmin, async(req,res)=>{
    const query = req.query.new
    try{
        const users = query ? await User.find().sort({_id:-1}).limit(10) : await User.find(); // return latest 10 users
        res.status(200).json(users);
    }catch(err){
        res.status(400).send(err);
        console.log(err);
    }
});

//get user stats
router.get("/stats",VerifyTokenAndAdmin, async(req,res)=>{});





module.exports = router;