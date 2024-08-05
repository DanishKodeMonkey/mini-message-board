const express = require('express');
const path = require('node:path');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Parse form contents through middleware to req.body object.
app.use(express.urlencoded({ extended: true }));

// messages array, pseudo database
const messages = [
    { text: 'Hi there!', user: 'Rick', added: new Date() },
    { text: 'Hello world!', user: 'Danish Kode Monkey', added: new Date() },
];

app.get('/', (req, res) =>
    res.render('index', { title: 'mini-messageboard', messages: messages })
);

app.get('/messages/:id', (req, res) => {
    const message = messages[req.params.id];
    if (message) {
        res.render('messageDetails', {
            title: 'Message Details',
            message: message,
        });
    } else {
        res.status(404).send('message not found');
    }
});

app.get('/form', (req, res) => res.render('form', { title: 'New message' }));

app.post('/new', (req, res) => {
    const message = {
        user: req.body.user,
        text: req.body.text,
    };
    messages.push({
        text: message.text,
        user: message.user,
        added: new Date(),
    });
    res.redirect('/');
});
const PORT = 3000;
app.listen(PORT, () =>
    console.log('Express initialized, listening on port ', PORT)
);
