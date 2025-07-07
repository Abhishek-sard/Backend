const http = require("http");




const Server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === "/home"){
    res.write('<h1>WElcome to home page</h1>');
    return res.end();
  }else if(req.url === "/men"){
    res.write('<h1>Welcome to men</h1>');
    return res.end();
  }else if(req.url === "/women"){
    res.write('<h1>Welcome to women</h1>');
    return res.end();
  }else if(req.url === "/kids"){
    res.write('<h1>Welcome to kids</h1>');
    return res.end();
  }else if(req.url === "/cart"){
    res.write('<h1>Welcome to cart</h1>');
    return res.end();
  }
  
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Mantra</title>
        <style>
          nav ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            gap: 20px;
          }
          nav ul li a {
            text-decoration: none;
            color: blue;
          }
        </style>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </nav>
      </body>
    </html>
  `);
  
  res.end();
});

Server.listen(3000, () => {
  console.log("Server is running on address http://localhost:3000");
});
