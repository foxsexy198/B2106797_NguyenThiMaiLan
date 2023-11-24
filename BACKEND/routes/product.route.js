const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const uploader = require('../config/cloudinary.cofig')
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken');

router.post('/', verifyAccessToken, isAdmin, productController.createNewProduct);
router.get('/', productController.getAllProducts);
// router.delete('/', productController.deleteAllProduct);
router.get('/:pid', productController.getProduct);
router.put('/:pid', verifyAccessToken, isAdmin, productController.updateProduct);
router.delete('/:pid', verifyAccessToken, isAdmin, productController.deleteProduct);
router.put('/uploadthumbnail/:pid', verifyAccessToken, isAdmin, uploader.single('thumbnail'), productController.uploadImagesProduct);



module.exports = router;