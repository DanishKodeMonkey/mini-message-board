const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}

async function getMessage(messageId) {
    const query = 'SELECT id, username, message FROM messages WHERE id = $1';
    const values = [`${messageId}`];

    try {
        const res = await pool.query(query, values);
        return res.rows[0] || null; // return first row if it exists , otherwise return null
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    }
}

async function createNewMessage(user, text) {
    const query = 'INSERT INTO messages(username, message) VALUES ($1, $2)';
    const values = [user, text];

    try {
        const res = await pool.query(query, values);
        return res.rowCount > 0; // returns true if a row was inserted
    } catch (err) {
        console.error('Error executing query ', err.stack);
        throw err;
    }
}

module.exports = {
    getAllMessages,
    getMessage,
    createNewMessage,
};
