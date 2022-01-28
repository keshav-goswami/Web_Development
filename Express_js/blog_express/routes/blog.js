const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('<h1>THIS IS INDEX PAGE</h1>');
})
router.get('/about',(req,res)=>{
    res.send(`<h1>This is About Page</h1>`)
})
router.get('/blogs',(req,res)=>{
    res.send(`<h1>This is Blogs Page</h1>`)
})
module.exports = router;
