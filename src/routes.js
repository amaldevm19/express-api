var express = require('express');
const homeController = require('./controller/home')
var router = express.Router();

router.get('/', homeController.homePage)

module.exports = router;