const express = require('express');

const routes = express.Router();

const CrawlerController = require('./app/controllers/CrawlerController');

routes.get('/verifySite', CrawlerController.verifySite);

module.exports = routes;
