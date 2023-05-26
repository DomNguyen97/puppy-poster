const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

router.get("/posts", postsCtrl.getAllPosts);
// POST /api/posts (create a user - sign up)
router.post("/create", postsCtrl.createPost);

router.delete("/posts", postsCtrl.deletePost);



module.exports = router;