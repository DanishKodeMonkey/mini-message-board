const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const db = require('../db/queries');

const validateMessage = [
    body('user')
        .isLength({ min: 1, max: 10 })
        .withMessage('Username must be between 1 and 10 characters'),
    body('text')
        .isLength({ min: 1, max: 600 })
        .withMessage('Message must be between 1 and 600 characters'),
];

exports.messagesListGet = asyncHandler(async (req, res) => {
    const messages = await db.getAllMessages();
    res.render('index', { title: 'mini-messageboard', messages: messages });
});

exports.messageGet = asyncHandler(async (req, res) => {
    const messageId = req.params.messageId;
    const message = await db.getMessage(messageId);
    if (message) {
        res.render('messageDetails', {
            title: 'Message Details',
            message: message,
        });
    } else {
        res.status(404).send('message not found');
    }
});

exports.messageCreateGet = (req, res) => {
    res.render('form', { title: 'Create new message' });
};

exports.messageCreatePost = [
    validateMessage,
    asyncHandler(async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render('form', {
                title: 'Create new message',
                errors: errors.array(),
            });
        }
        const { user, text } = req.body;
        await db.createNewMessage(user, text);
        res.redirect('/');
    }),
];
