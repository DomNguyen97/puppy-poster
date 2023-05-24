const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/posts', ensureLoggedIn, postsCtrl.create);
// POST /api/users/login
router.delete('/posts/:id', ensureLoggedIn, postsCtrl.delete);
// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;