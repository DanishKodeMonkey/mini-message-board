const express = require('express');
const path = require('node:path');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// messages array, pseudo database
const messages = [
    { text: 'Hi there!', user: 'Rick', added: new Date() },
    { text: 'Hello world!', user: 'Danish Kode Monkey', added: new Date() },
];

app.get('/', (req, res) =>
    res.render('index', { title: 'mini-messageboard', messages: messages })
);
app.get('/form', (req, res) => res.render('new', { title: 'New message' }));

const PORT = 3000;
app.listen(PORT, () =>
    console.log('Express initialized, listening on port ', PORT)
);
