const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

const hostname = '127.0.0.1';
const port = 80;

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const contact = fs.readFileSync('./contact.html');
const services = fs.readFileSync('./services.html');

const server = http.createServer((req,res)=>{
    User_link = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end(home);
    if(User_link == '/'){
        res.end(home);
    }
    else if(User_link == '/about.html'){
        res.end(about);
    }
    else if(User_link == '/contact.html'){
        res.end(contact);
    }
    else if(User_link == '/services.html'){
        res.end(services);
    }
    else{
        res.statusCode = 404;
        console.log("404 Error Found");
    }
}).listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});