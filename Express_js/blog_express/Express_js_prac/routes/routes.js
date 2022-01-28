const express = require('express')
const path = require('path')
const courses = require('../courses/courses')
const news = require('../news/news')
const router = express.Router();
const port = process.env.PORT || 3000;

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../index.html'));
})
router.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'../about.html'));
})
router.get('/services',(req,res)=>{
    res.send('<h1>this is services page');
})
router.get('/:id',(req,res)=>{
    if(req.params.id === 'courses'){
        res.send(courses);
    }
    else if(req.params.id === 'news'){
        res.send(news);
    }
    else{
        res.send(`<h1>This is the given ID => ${req.params.id}</h1>`)
    }
})

module.exports = router;