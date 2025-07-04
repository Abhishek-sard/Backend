const http = require('http');



const Server = http.createServer((req, res) =>{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>')
    res.write('<body><h1>Like /Share /Subscribe</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT = 3000;
Server.listen(PORT, () => {
    console.log(`Server is running on address http://localhost: ${PORT}`);
}) 