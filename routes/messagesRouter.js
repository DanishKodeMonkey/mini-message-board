const { Router } = require('express');
const messagesController = require('../controllers/messagesController');

const messagesRouter = Router();

/* list */
messagesRouter.get('/', messagesController.messagesListGet);
messagesRouter.get('/messages/:messageId', messagesController.messageGet);

/* Create */
messagesRouter.get('/new', messagesController.messageCreateGet);
messagesRouter.post('/new', messagesController.messageCreatePost);

module.exports = messagesRouter;
