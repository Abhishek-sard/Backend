const http = require('http');



const Server = http.createServer((req, res) =>{
    console.log(req);
    process.exit();
});

const PORT = 3000;
Server.listen(PORT, () => {
    console.log(`Server is running on address http://localhost: ${PORT}`);
}) 