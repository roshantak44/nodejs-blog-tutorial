module.exports = (req, res) => {
    if (req.session) {
        //delete the session
        req.session.destroy(function(err) {
            if(err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        })
    }
}