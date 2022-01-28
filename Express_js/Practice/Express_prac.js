const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Serving a folder
app.use(express.static(path.join(__dirname,"Public")));

// Custom Middleware
// const keshav = (req,res,next)=>{
//     console.log('THIS IS CUSTOM MIDDLEWARE');
//     next()
// }
// app.use(keshav);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
    // res.status(500);
})
app.get('/hello/:name2', (req, res) => {
    res.send('<h1>Hello</h1>'+req.params.name2);
    // res.status(500);
})
app.get('/about', (req, res) => {
    res.send('<h1>This is About Page</h1>');
})
app.get('/Json',(req,res)=>{
    res.json({'Keshav':34});
})
console.log(__dirname);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})