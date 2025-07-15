//core module
const http = require("http");

//External module
const express = require('express');

//local module
const requestHandler = require("./requestHandler");
const app = express();

app.use((req,res,next)=>{
  console.log("Came in first middleware");
  next();
});


app.use((req,res,next)=>{
  console.log("Came in second middleware");
  next();
})
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
