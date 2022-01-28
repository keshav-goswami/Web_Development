const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000;
require('dotenv/config');


// Routes using Middlewares  
app.use(express.json());

app.use('/',require('./Routes/routes'));
app.use('/blogs',require('./Routes/blogs'));

// Listening to the requests
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})

// Link with Database
mongoose.connect(process.env.mylink, {useNewUrlParser:true,useUnifiedTopology: true},()=> console.log("Connected to Database"));