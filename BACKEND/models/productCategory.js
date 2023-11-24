const mongoose = require('mongoose');

let productCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('ProductCategory', productCategorySchema);