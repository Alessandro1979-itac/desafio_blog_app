const router = require('express').Router();
const controlCategory = require('../controller/category');

router.get('/', controlCategory.showCategories)
router.get('/:slug', controlCategory.showCategoryPosts);

module.exports = router;
