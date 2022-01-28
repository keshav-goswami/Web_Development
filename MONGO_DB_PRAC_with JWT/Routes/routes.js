const express = require('express')
const router = express.Router();
const path = require('path')
const jwt = require('jsonwebtoken');
const Blogs = require('../Models/schema');
const bcrypt = require('bcryptjs')
const {registerValidation,loginValidation} = require('../Validation')


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../index.html'))
})
router.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'../about.html'))
})
router.get('/blogs',(req,res)=>{
    res.sendFile(path.join(__dirname,'../blogs.html'))
})
router.post('/register',async (req,res)=>{
    // validation of user data
    const {error} = registerValidation(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    // If email already exists
    const emailExist = await Blogs.findOne({email : req.body.email});

    if(emailExist) return res.status(400).send("email already exists");

    // hashpassword
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password,salt);
   
    const blog = new Blogs({
        name : req.body.name,
        password : hashpassword,
        email: req.body.email
    });
    try{
        const savedPost = await blog.save();
        res.json({id:blog._id});
    }
    catch(err){
        res.json({message:err});
    }
})

router.post('/login', async (req,res)=>{
    // validation if u want to validate uncomment
    // const {error} = loginValidation(req.body);
    // if(error) return res.status(400).send(error.details[0].message);

    // checking if email exists
    const emailcheck = await Blogs.findOne({email:req.body.email});
    if(!emailcheck) return res.status(400).send("Email doesn't exists");

    // checking password is correct or not
    const checkpassword = await bcrypt.compare(req.body.password,emailcheck.password);
    if(!checkpassword) return res.status(400).send("Wrong Password");
    // else return res.send('Logged In');

    // Generating the token

    const token = jwt.sign({_id:emailcheck._id},process.env.secret_key);
    res.header('auth-user',token).send(token);
})
module.exports = router;