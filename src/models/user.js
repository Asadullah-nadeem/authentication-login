const db = require('../config/db');

const User = {
    create: (username, recoveryPhrase, passwordHash, callback) => {
        const query = 'INSERT INTO users (username, recovery_phrase, password) VALUES (?, ?, ?)';
        db.query(query, [username, recoveryPhrase, passwordHash], callback);
    },
};

module.exports = User;
