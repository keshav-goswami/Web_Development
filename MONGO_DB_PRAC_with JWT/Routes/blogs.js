const router = require('express').Router()
const path = require('path')
const verify = require('./private_routes')
// importing web page

router.get('/blog',verify,(req,res)=>{
    res.sendFile(path.join(__dirname,'../blogs.html'));
    // res.json({
    //     'title':'responded'
    // })
})

module.exports = router;