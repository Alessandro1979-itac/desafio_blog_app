const router = require('express').Router();
const postControl = require('../controller/post');

router.get('/', postControl.listApprovedPosts_PostsPage);
router.get('/:slug', postControl.showPost);

module.exports = router;
