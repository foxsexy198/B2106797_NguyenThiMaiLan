const userRouter = require('./user.route');
const productRouter = require('./product.route');
const CategoryRouter = require('./productCategory.route');
const { notFound } = require('../middlewares/errorHandler');
const orderRouter = require('./order.route');

const initRoutes = (app) => {
    app.use('/api/user', userRouter);
    app.use('/api/product', productRouter);
    app.use('/api/category', CategoryRouter);
    app.use('/api/order', orderRouter);

    app.use(notFound);
}

module.exports = initRoutes;