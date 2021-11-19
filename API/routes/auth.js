const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//register user
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString(),
    });
    try {
        const savedUser = await newUser.save(); // wait till the user is saved in the database
        res.status(201).json(savedUser); // send the saved user back to the client
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//login user
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username }); // find the user in the database
        !user && res.status(401).json("Invalid username or password");
        if (user) {
            const hashPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET);
            const Originalpassword = hashPassword.toString(CryptoJS.enc.Utf8); // decrypt the password
            // check if the password is correct
            Originalpassword !== req.body.password && res.status(401).json("Invalid username or password");

            const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin,
            },process.env.JWT_SECRET, { expiresIn: '1h' });

            const { password, ...others } = user._doc; // get the user data without the password ; 
            //return the user
            res.status(200).json({...others,accessToken});
        }
    }
    catch (err) {
        //res.status(500).json(err);
        console.log(err);
    }
});




module.exports = router;