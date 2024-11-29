const express = require('express');
const routes = express.Router();
const { listarblog } = require('../controller/blosgcontroller');

routes.get('/blog', listarblog);

module.exports = routes;
