const router = require('express').Router();
const todoListRouter = require('./pages/to-do-list');
const usersRouter = require('./pages/users');
const { appErrorHandler } = require('../middlewares/error-handler');

router.use('/to-do-list', todoListRouter);
router.use('/users', usersRouter);
router.use(appErrorHandler);

module.exports = router;