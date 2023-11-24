const router = require('express').Router();
const Category = require('../controllers/productCategory.controller');
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken');

router.post('/', [verifyAccessToken, isAdmin], Category.createCategory);
router.get('/', Category.getAllCategory);
router.put('/:pcid', [verifyAccessToken, isAdmin], Category.updateCategory);
router.delete('/:pcid', [verifyAccessToken, isAdmin], Category.deleteCategory);

module.exports = router;