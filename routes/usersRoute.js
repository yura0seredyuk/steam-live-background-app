const express = require('express');

const router = express.Router();

const usersRoute = require('../controllers/usersControllers');

router.get('/', usersRoute.usersController)

module.exports = router;
