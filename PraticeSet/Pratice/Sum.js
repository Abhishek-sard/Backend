const sumRequestHandler = (req, res) => {
  console.log("In Sum Request Handler", req.url);
  const body = [];

  req.on('data', chunk => {
    body.push(chunk);
  }).on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);

    const num1 = parseFloat(bodyObj.num1);
    const num2 = parseFloat(bodyObj.num2);
    const sum = num1 + num2;

    // Send response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Sum Result</title></head>');
    res.write('<body>');
    res.write(`<h1>The sum of ${num1} and ${num2} is: ${sum}</h1>`);
    res.write('</body>');
    res.write('</html>');
    res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;
