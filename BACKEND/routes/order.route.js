const router = require('express').Router();
const Order = require('../controllers/order.controller');
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken');
const { prefixAdmin } = require('../config/system.config');

router.post('/', verifyAccessToken, Order.createOrder);
router.put('/status/:oid', [verifyAccessToken, isAdmin], Order.updateStatus);
router.get('/', verifyAccessToken, Order.getUserOrder);
router.get(`/${prefixAdmin}`, [verifyAccessToken, isAdmin], Order.getOrder);

module.exports = router;