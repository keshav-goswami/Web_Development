const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    const token = req.header('auth-user');

    if(!token) return res.status(401).send('ACCESS DENIED');
    try{
        const verify = jwt.verify(token,process.env.secret_key);
        next();
    }
    catch(err){
        res.status(400).send('Invalid Token');
    }
}