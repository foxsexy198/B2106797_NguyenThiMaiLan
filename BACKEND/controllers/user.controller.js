const User = require('../models/user');
const asyncHandler = require('express-async-handler');
const { generateAccessToken, generateRefreshToken } = require('../middlewares/jwt');
const jwt = require('jsonwebtoken');
const sendMail = require('../utils/sendMail');
const crypto = require('crypto');

const register = asyncHandler(async (req, res) => {
    const { email, password, firstName, lastName, phone } = req.body;
    if (!email || !password || !lastName || !firstName || !phone) {
        return res.status(400).json({
            sucess: false,
            mes: 'Missing inputs profile'
        })
    }
    const user = await User.findOne({ email: email });
    if (user)
        throw new Error('User has existed!');

    const newUser = await User.create(req.body);
    return res.status(200).json({
        sucess: newUser ? true : false,
        mes: newUser ? 'Register is successfully':'Something went wrong.'
    })
})



const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            sucess: false,
            mes: 'Missing email or password'
        })
    }
    const response = await User.findOne({ email });
    if (response && await response.isCorrectPassword(password)) {
        const { password, role, refreshToken, ...userData } = response.toObject();
        const accessToken = generateAccessToken(response._id, role);
        const newRefreshToken = generateRefreshToken(response._id);
        await User.findByIdAndUpdate(response._id, { refreshToken: newRefreshToken }, { new: true });
        res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 7*24*60*60*1000 });
        return res.status(200).json({
            sucess: true,
            accessToken,
            userData
        })
    }
    else {
        throw new Error('Invalid credentials!');
    }
})

const getOneUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const user = await User.findById(_id).select('-refreshToken -password -role');
    return res.status(200).json({
        success: user ? true:false,
        result: user ? user : 'User not found'
    })
})

const refreshAccessToken = asyncHandler(async(req, res) => {
    const cookie = req.cookies;
    if (!cookie && !cookie.refreshToken)
        throw new Error('No refresh token in cookies');

    const result = await jwt.verify(cookie.refreshToken, process.env.JWT_SECRET);
    const response = await User.findOne({ _id: result._id, refreshToken: cookie.refreshToken });
    return res.status(200).json({
        success: response ? true:false,
        newAccessToken: response ? generateAccessToken(response._id, response.role) : 'Refresh token not matched'
    })
})

const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie || !cookie.refreshToken)
        throw new Error('No refresh token in cookies');

    await User.findOneAndUpdate({ refreshToken: cookie.refreshToken }, { refreshToken: '' }, { new: true });
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true
    })
    return res.status(200).json({
        success: true,
        message: 'logout is done'
    })
})

const forgotPassword = asyncHandler(async (req, res) => {
    const {email} = req.query;
    if (!email)
        throw new Error('Missing email');

    const user = await User.findOne({ email });
    if (!user)
        throw new Error('User not found');

    const resetToken = user.createPasswordChangedToken();
    await user.save();
    const html = `Please click here. Link expire after 10 minutes. <a href=${process.env.URL_SERVER}/api/user/reset-password/${resetToken}>Click</a>`;
    const data = {
        email,
        html
    }
    const result = await sendMail(data);
    return res.status(200).json({
        success: true,
        result
    })
})

const resetPassword = asyncHandler(async (req, res) => {
    const {token, password} = req.body;
    if (!token || !password)
        throw new Error('Mising inputs');

    const passwordResetToken = crypto.createHash('sha256').update(token).digest('hex');
    const user = await User.findOne({ passwordResetToken, passwordResetExpires: { $gt: Date.now() } });
    
    if (!user)
        throw new Error('Invalid reset token');

    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordChangeAt = Date.now();
    user.passwordResetExpires = undefined;
    await user.save();
    return res.status(200).json({
        success: user ? true:false,
        message: user ? 'Updated password':'Something went wrong!'
    })

})

const getAllUsers = asyncHandler(async (req, res) => {
    const response = await User.find().select('-refreshToken -password -role');
    return res.status(200).json({
        success: response ? true:false,
        message: response
    })
})

const deleteUser = asyncHandler(async(req, res) => {
    const {_id} = req.query;
    if (!_id) 
        throw new Error('Missing inputs');

    const response = await User.findByIdAndDelete(_id);
    return res.status(200).json({
        success: response ? true:false,
        deletedUser: response ? `User with emal ${response.email} deleted` : `No user delete`
    })
})


const updateUser = async (req, res) => {
    try {
        const { _id } = req.user;
        if (!_id || Object.keys(req.body).length == 0)  //keys trả về 1 mảng 
            throw new Error('Missing inputs');

        const user  = await User.findByIdAndUpdate(_id, req.body, { new: true }).select('-password -role');
        return res.status(200).json({
            success: user ? true:false,
            updateUser: user ? user:'Something wrong'
        });
    }
    catch(error) {
        throw new Error('Error at updateUser of userController: ', error);
    }
    
}


const updateUserByAdmin = async (req, res) => {
    try {
        const { uid } = req.params;
        if (Object.keys(req.body).length === 0)
            throw new Error('Missing inputs at update user admin');

        const user = await User.findByIdAndUpdate(uid, req.body, { new: true}).select('-password -role');
        return res.status(200).json({
            success: user ? true : false,
            updateUser: user ? user : 'Somthing wrong update user admin '
        })
    }
  
    catch(error) {
        throw new Error('Error at updateUserByAdmin of userController: ', error);
    }
}

const updateCart = async (req, res) => {
    try {
        const { _id } = req.user;
        const { pid, quantity } = req.body;
        if(!pid || !quantity)
            throw new Error('Missing inputs update cart');

        const user = await User.findById(_id).select('cart');
        const hasProduct = user?.cart?.find(el => el.product.toString() === pid);
        let response;
        if(hasProduct) {
            response = await User.updateOne({ cart: {$elMatch: hasProduct } }, {$set: { 'cart.$.quantity': quantity }}, { new: true });
        }
        else {
            response = await User.findByIdAndUpdate(_id, { $push: { cart: { product: pid, quantity } } }, { new: true });
        }

        return res.status(200).json({
            success: response ? true : false,
            cart: response ? response : 'Cannot update cart'
        })
    }
    catch(error) {
        throw new Error('Error at updateCart of userController: ', error);
    }
}

module.exports = {
    register,
    login,
    getOneUser,
    refreshAccessToken,
    logout,
    forgotPassword,
    resetPassword,
    getAllUsers,
    deleteUser,
    updateUser,
    updateUserByAdmin,
    updateCart,
}
 
