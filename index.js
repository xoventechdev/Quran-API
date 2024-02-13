const http = require('http');
const url = require('url');
const routes = require('./route/routeHandlers');

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

    const persedUrl = url.parse(req.url, true);
    const pathname = persedUrl.pathname;
    const trimmedPathname = pathname.replace(/^\/|\/$/g, '');
    const mothed = req.mothed.toLowerCase();
    const qureyObject = persedUrl.query;

    const controlRoutes = routes[trimmedPathname];



}


app.createServer();