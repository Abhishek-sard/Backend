const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/PraticeSet/Calculator.js") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Sum of Number</title></head>");
    res.write("<body>");
    res.write("<h1>Enter Two Numbers to Calculate Sum:</h1>");
    res.write('<form method="POST" action="/calculate-sum">');
    res.write('<input type="number" name="num1" placeholder="First Number" required><br><br>');
    res.write('<input type="number" name="num2" placeholder="Second Number" required><br><br>');
    res.write('<button type="submit">Calculate Sum</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  // Optional: handle other URLs
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>404 - Page not found</h1>");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
