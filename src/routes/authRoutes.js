const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../config/db');

const router = express.Router();
router.post('/signup', async (req, res) => {
    const { username, password, recoveryPhrase } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (username, secret_recovery_phrase, password) VALUES (?, ?, ?)';
        db.query(query, [username, recoveryPhrase, hashedPassword], (error, results) => {
            if (error) {
                console.error('Database insertion error: ', error);
                return res.status(500).json({ success: false, message: 'Database error' });
            }
            res.status(201).json({ success: true, message: 'User registered successfully!' });
        });
    } catch (error) {
        console.error('Error in signup route: ', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});
router.post('/login', async (req, res) => {
    const { username, recoveryPhrase, password } = req.body;
    const query = 'SELECT password, secret_recovery_phrase FROM users WHERE username = ?';
    db.query(query, [username], async (error, results) => {
        if (error) {
            console.error('Error fetching user data: ', error);
            return res.status(500).json({ success: false, message: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid username or recovery phrase' });
        }
        const hashedPassword = results[0].password;
        const storedRecoveryPhrase = results[0].secret_recovery_phrase;
        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        if (storedRecoveryPhrase !== recoveryPhrase || !passwordMatch) {
            return res.status(401).json({ success: false, message: 'Invalid username, recovery phrase, or password' });
        }
        req.session.username = username;
        res.render('dashboard', { username: username });
    });
});
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session: ', err);
            return res.status(500).json({ success: false, message: 'Failed to log out' });
        }
        res.redirect('/login');
    });
});
module.exports = router;
