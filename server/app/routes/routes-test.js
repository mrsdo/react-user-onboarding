const express = require('express');
const router = express.Router();

// import controllers
const {getRouterTest} = require('../controllers/controller-test');

// import middleware

// api routes
router.get('/test', getRouterTest );


// exporting router so accessible by app.js (GET, PUT, Etc)
module.exports = router;

