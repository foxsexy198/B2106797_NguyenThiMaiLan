const router = require('express').Router();
const controllers = require('../controllers/user.controller');
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken');


router.get('/', [verifyAccessToken, isAdmin], controllers.getAllUsers);
router.get('/logout', controllers.logout);
router.get('/current', verifyAccessToken, controllers.getOneUser);
router.get('/forgotpassword', controllers.forgotPassword);
router.post('/register', controllers.register);
router.post('/login', controllers.login);
router.post('/refreshtoken', controllers.refreshAccessToken);
router.put('/resetpassword', controllers.resetPassword);
router.put('/cart', [verifyAccessToken], controllers.updateCart);
router.put('/:uid', [verifyAccessToken, isAdmin], controllers.updateUserByAdmin);
router.put('/current', verifyAccessToken, controllers.updateUser);
router.delete('/', [verifyAccessToken, isAdmin], controllers.deleteUser);

module.exports = router;