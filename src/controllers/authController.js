const bcrypt = require('bcrypt');
const User = require('../models/user');
const generateRecoveryPhrase = require('../utils/recoveryPhrase');

exports.signup = async (req, res) => {
    const { username, password } = req.body;

    if (password.length < 8) {
        return res.status(400).json({ success: false, message: 'Password must be at least 8 characters long' });
    }

    const recoveryPhrase = generateRecoveryPhrase();
    const hashedPassword = await bcrypt.hash(password, 10);

    User.create(username, recoveryPhrase, hashedPassword, (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Database error' });
        }
        res.json({ success: true, message: 'User registered successfully' });
    });
};
