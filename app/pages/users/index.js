const router = require('express').Router();
const User = require('../../../models/user');

router.get('/', (req, res, next) => {
    User.getAllUsers()
        .then(users => {
            res.render('users', {
                users,
            });
        })
        .catch(err => {
            next(err);
        });
});

module.exports = router;