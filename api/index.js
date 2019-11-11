const router = require('express').Router();
const taskRouter = require('./tasks');
const userRouter = require('./users');
const { apiErrorHandler } = require('../middlewares/error-handler');

router.use('/tasks', taskRouter);
router.use('/users', userRouter);
router.use(apiErrorHandler);

module.exports = router;