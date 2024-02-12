const http = require('http');

const app = {};

app.config = {
    port: 3000
}

app.createServer = () => {
    const server = http.createServer(app.hendleRoute);
    server.listen(app.config.port,() => {
        console.log(`Server running on port ${app.config.port}`);
    });
}

app.hendleRoute = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to the server');
}


app.createServer();