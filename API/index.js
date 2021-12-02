const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//routes
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');

const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB connection succeeded!"))
.catch((err)=>{
    console.log(err);
}); 

app.use(express.json()); //use json format for request

//cors
app.use(cors());
//routes
app.use('/api/auth', authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use('/api/carts',cartRoute);
app.use('/api/carts',orderRoute);
app.use('/api/checkout',stripeRoute);



app.listen(process.env.PORT || 5000 , () => {
    console.log('Server is running on port ' + process.env.PORT);
});