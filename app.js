const express = require('express');
const path = require('node:path');
const port = process.env.PORT || 3000;
const messagesRouter = require('./routes/messagesRouter');
const initMessagesTable = require('./db/initMessagesTable');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Parse form contents through middleware to req.body object.
app.use(express.urlencoded({ extended: true }));

app.use('/', messagesRouter);

(async () => {
    await initMessagesTable();
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    });
})();
