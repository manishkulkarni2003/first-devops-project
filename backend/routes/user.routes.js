const router = require('express').Router();
const registerUser = require('../controller/user.controller');

router.post('/register', registerUser);

module.exports = router;
