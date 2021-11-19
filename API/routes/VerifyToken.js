const jwt = require('jsonwebtoken');

const VerifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(' ')[1]; //split the token from the bearer
        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            if(err){
                return res.status(401).json({
                    message: 'Invalid Token'
                });
            }
            req.user = user;
            next(); // after verify the token, go to route
        })
    }
    else{
        return res.status(401).json("not authenticated");
    }
}

const VerifyTokenAndAuth = (req, res, next) => {
    VerifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }
        else{
            return res.status(401).json("not authenticated");
        }
    })
}

const VerifyTokenAndAdmin = (req, res, next) => {
    VerifyToken(req, res, () => {
        if(req.user.isAdmin){
            next();
        }
        else{
            return res.status(401).json("not authenticated");
        }
    })
}


module.exports = {VerifyToken,VerifyTokenAndAuth,VerifyTokenAndAdmin};