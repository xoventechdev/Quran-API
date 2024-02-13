const express = require('express');
const apiController = require('../controller/apiController');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({
        status : 'success',
        message: 'Welcome to the Quran API service'
    });
});


routes.get('/api/v1/surah', (req, res) => {
    apiController.allSurah(req, res);
});

routes.get('/api/v1/surah/:id', (req, res) => {
    apiController.singleSurah(req, res);
});

module.exports = routes;