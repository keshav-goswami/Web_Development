const express = require('express')
const path = require('path')
const app = express()
const port = 5000

app.use('/',require('./routes/blog'));
app.listen(port,()=>{
    console.log(`Server is Running at http://localhost:${port}`)
})

