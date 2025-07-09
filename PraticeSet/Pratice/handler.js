const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/home') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>Pratice Set</title>
        </head>
        <body>
          <h1>Welcome to Calculator</h1>
          <a href="/Calculator">Go to Calculator</a>
        </body>
      </html>
    `);
    return res.end();
  }else if (req.url.toLowerCase() === '/Calculator') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>Calculator</title>
        </head>
        <body>
          <h1>Here is the Calculator</h1>
          <form action="/calculate" method="POST">
            <input type="text" name="expression" placeholder="Enter expression" />
            <button type="submit">Calculate</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write(
    `
      <html>
        <head>
          <title>Pratice Set</title>
        </head>
        <body>
          <h1>Welcome to Pratice Set</h1>
          <a href="/home">Go to Home</a>
        </body>
      </html>
    `);
  return res.end();
  
};

module.exports = requestHandler;
