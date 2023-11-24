const mongoose = require('mongoose');

let orderSchema = new mongoose.Schema({
    products: [{
        product: { type: mongoose.Types.ObjectId, ref: 'Product' },
        count: Number,
    }],

    status: {
        type: String,
        default: 'Pending',
        enum: ['Cancelled', 'Pending', 'Succeed']
    },

    total: Number,
    
    orderBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Order', orderSchema);