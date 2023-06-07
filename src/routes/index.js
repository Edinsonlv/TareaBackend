const express = require('express');
const router = express.Router();
const rutasPost = require('./ver');

router.use('/ver', rutasPost)

module.exports = router;