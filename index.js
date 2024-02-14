const express = require('express');
const http = require('http');
const url = require('url');
const routes = require('./route/routeHandlers');

const PORT = 3333;

const app = express();


app.use(routes)




app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
})

