const User = require('../database/models/User')

module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if (error) {
            var errors = req.flash('registrationErrors');
            Object.keys(errors).forEach(function(error) {
            JSON.stringify(errors[error])
            return res.redirect('/auth/register');
        })
        res.redirect('/');
}
})
}