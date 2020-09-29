var express = require('express');
const homeController = require('./controller/home')
const messagesController = require('./controller/messages')
var router = express.Router();

router.get('/', homeController.homePage)
router.get('/messages', messagesController.messagePage)
router.post('/messages', messagesController.addMessage)

module.exports = router;