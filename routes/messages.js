const { Router } = require('express');
const messagesController = require('../controllers/messagesController');

const messagesRouter = Router();

/* list */
messagesRouter.get('/', messagesController.messagesListGet);
messagesRouter.get('/messages/:id', messagesController.messageGet);

/* Create */
messagesRouter.get('/new', messagesController.messagesCreateGet);
messagesRouter.post('new', messagesController.messagesCreatePost);
