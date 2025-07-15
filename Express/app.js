//core module
const http = require("http");

//External module
const express = require('express');

//local module
const app = express();

//to route the users.js
const users = require('./users');
app.use((req,res,next)=>{
  console.log("Came in first middleware");
  next();
});


app.use((req,res,next)=>{
  console.log("Came in second middleware", req.url, req.method);
  res.send('<h1>Welcome to Express App</h1>');
  next();
})
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
