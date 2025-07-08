const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");

  if (req.url === "/home") {
    res.write('<h1>Welcome to my home page</h1>');
    return res.end();
  } else if (req.url === "/Calculator") {
    res.write('<h1>Welcome to my sum page</h1>');
    return res.end();
  }

  // Default page
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
            <li><a href="/Calculator">Calculator</a></li>
          </ul>
        </nav>
      </body>
    </html>
  `);
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on address http://localhost:3000");
});
module.exports = server; // Export the server for testing or other purposes