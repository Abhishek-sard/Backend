const http = require("http");
const fs = require("fs");
const { URLSearchParams } = require("url");

const Server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body>");
    res.write("<h1>Enter Your Details:</h1>");
    res.write('<form method="POST" action="/submit-details">');
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
  }else if (req.url.toLowerCase() === "/submit-details" && req.method == "POST" ){

    const body = [];

    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    })


    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};

      // for (const [key, val] of params.entries()) {
      //   bodyObject[key] = val;

      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject));


      const parsedBody = new URLSearchParams(fullBody);
      const name = parsedBody.get("name");
      const email = parsedBody.get("email");
      const gender = parsedBody.get("gender");
      console.log(`Name: ${name}, Email: ${email}, Gender: ${gender}`);
      res.writeHead(302, { Location: "/" });
      return res.end();
    });
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
