var express = require('express');
const homeController = require('./controller/home')
const messagesController = require('./controller/messages')
const middleware = require('./middleware/middleware')
var router = express.Router();

router.get('/', homeController.homePage)
router.get('/messages', messagesController.messagePage)
router.post('/messages',middleware.modifyMessage, messagesController.addMessage)

module.exports = router;