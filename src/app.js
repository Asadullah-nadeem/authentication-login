const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const isAuthenticated = require('./routes/authMiddleware'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const URL = process.env.URL
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src/views')); 
app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
// index.ejs
app.get('/', (req, res) => {
    res.render('index');
});

// Dashboard.ejs
app.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard', { username: req.session.username });
});
// signup.ejs
app.get('/signup', (req, res) => {
    res.render('signup'); 
});
// login.ejs
app.get('/login', (req, res) => {
    res.render('login'); 
});

app.use('/api', authRoutes);

app.listen(PORT, (err) => {
    if (err) {
        console.error('❌ Error starting server:', err);
        return;
    }
    console.log(`✅ Server running at ${URL}`);
    console.log(`✅ Server running on port ${PORT}`);
});
