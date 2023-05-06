var express = require('express');
var router = express.Router();


router.get('/google', function(req, res, next) {
    res.send(req.user);
});

router.post('/logout', function(req, res, next){
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        res.redirect('/login');
    });
});

module.exports = router;