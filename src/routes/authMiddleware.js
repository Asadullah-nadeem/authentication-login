
function isAuthenticated(req, res, next) {
    if (req.session.username) {
        return next(); 
    } else {
        return res.redirect('/login');
    }
}

module.exports = isAuthenticated;
