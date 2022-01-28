const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('../Models/schema');
const app = express();
const JWT = require('jsonwebtoken');
const { json } = require('body-parser');
const { createSecretKey } = require('crypto');
dotenv.config();

// Middlewares
app.use(express.json());

//Routes
// app.get('/api',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./index.html'));
// })
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './login.html'));
})
app.get('/ch_password', (req, res) => {
    res.sendFile(path.join(__dirname, './ch_password.html'));
})
app.post('/api/register', async (req, res) => {
    // Hashing the password
    const { username, password: plain_password } = req.body;
    // console.log(req.body);
    if (!username || typeof username != 'string') {
        return res.json({ status: 'error', message: 'Invalid Username' });
    }
    if (!plain_password || typeof plain_password != 'string') {
        return res.json({ status: 'error', message: 'Invalid Password' });
    }
    if (plain_password.length < 6) {
        return res.json({ status: 'error', message: 'Minimum length of password should be 6' });
    }
    const Salt = await bcrypt.genSalt(5);
    const password = await bcrypt.hash(plain_password, Salt);
    const user = new User({
        username,
        password
    })
    try {
        const savedUser = await user.save();
        res.json({ status: 'ok' });
    } catch (error) {
        if (error.code === 11000) {
            return res.json({ status: 'error', message: 'Username should be Unique.....' });
        }
        else return res.json({ status: 'error', message: error });
    }
})
app.post('/api/login', async (req, res) => {
    // Hashing the password
    // console.log(req.body);
    const { username, password } = req.body;
    const user = await User.findOne({ username }).lean()
    if (!user) {
        return res.json({ status: 'error', message: 'Invalid Username/Password' });
    }
    if (await bcrypt.compare(password, user.password)) {
        const data = JWT.sign({ Id: user._id, User: user.username }, process.env.Secret_Key)
        return res.json({ status: 'ok', data: data });
    }
    res.json({ status: 'error', message: 'Invalid Username/Password', data: null });
})
app.post('/api/ch_password', async (req, res) => {
    // Hashing the password
    const { token, new_password: plain_password } = req.body;
    console.log(req.body);
    if (!plain_password || typeof plain_password != 'string') {
        return res.json({ status: 'error', message: 'Invalid Password' });
    }
    if (plain_password.length < 6) {
        return res.json({ status: 'error', message: 'Minimum length of password should be 6' });
    }
    const user = await JWT.verify(token, process.env.Secret_Key);
    console.log(user);
    // catch(error){
    //     return res.json({status:'error',message:error})
    // }
    if (!user) {
        return res.json({ status: 'error', message: 'Login First to change Password' });
    }
    try {
        const hashed_password = await bcrypt.hash(plain_password, 10);
        const _id = user.Id;
        await User.updateOne({ _id }, {
            $set: { password: hashed_password }
        })
        return res.json({ status: 'ok' });
    } catch (error) {
        return res.json({ message: error });
    }
    // res.json({status:'error',message:'Invalid Username/Password'});
})

// Listen
app.listen(9000, () => {
    console.log(`Server Running at http://localhost:9000/register`); 
})
// connection to DB
mongoose.connect(process.env.Link, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected with DataBase');
});