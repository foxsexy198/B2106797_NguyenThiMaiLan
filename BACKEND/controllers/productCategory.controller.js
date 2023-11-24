const Category = require('../models/productCategory');

const createCategory = async (req, res) => {
    try {
        if(!req.body)
            throw new Error('Missing inputs category');

        const category = await Category.create(req.body);
        return res.status(200).json({
            success: category ? true : false,
            category: category ? category : 'Cannot create category'
        })    
    }
    catch(error) {
        throw new Error('Error at createCategory of productCategory: ', error);
    }
   
}

const getAllCategory = async (req, res) => {
    const categories = await Category.find().select('name _id');
    return res.status(200).json({
        success: categories ? true : false,
        category: categories ? categories : 'Cannot get category'
    })  
}

const updateCategory = async (req, res) => {
    const { pcid } = req.params;
    const category = await Category.findByIdAndUpdate(pcid, req.body, { new: true });
    return res.status(200).json({
        success: category ? true : false,
        category: category ? category : 'Cannot get category'
    })  
}

const deleteCategory = async (req, res) => {
    const { pcid } = req.params;
    const category = await Category.findByIdAndDelete(pcid);
    return res.status(200).json({
        success: category ? true : false,
        category: category ? category : 'Cannot delete category'
    })  
}

module.exports = {
    createCategory,
    getAllCategory,
    updateCategory,
    deleteCategory,
}