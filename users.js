const http = require("http");

const Server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body>");
    res.write("<h1>Enter Your Details:</h1>");
    res.write('<form method="POST" action="/submit-detailsd">');
    res.write('<input type="text" name="name" placeholder="Name" required><br><br>');
    res.write('<input type="email" name="email" placeholder="Email" required><br><br>');
    res.write('<input type="radio" id="male" name="gender" value="male" required>');
    res.write('<label for="male">Male</label><br>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  // Handle other routes
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Like / Share / Subscribe</h1></body>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
Server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
