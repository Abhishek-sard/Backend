const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>Pratice Set</title>
        </head>
        <body>
          <h1>404 is not exist</h1>
          <a href="/Calculator">Go to Calculator</a>
        </body>
      </html>
    `);
    return res.end();
  }
};

module.exports = requestHandler;
