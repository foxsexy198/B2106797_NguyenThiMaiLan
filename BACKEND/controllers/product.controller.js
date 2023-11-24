const Product = require("../models/product");
const slugify = require("slugify");

//lỗi
const createNewProduct = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0)
      throw new Error("Missing inputs product");

    if (req.body && req.body.name) req.body.slug = slugify(req.body.name, {locale: 'vi'});

    const product = await Product.create(req.body);
    return res.status(200).json({
      success: product ? true : false,
      createProduct: product ? product : "Cannot create new product",
    });
  } catch (error) {
    throw new Error("Error at createNewProduct of productController: ", error);
  }
};

// Lọc và phân trang
const getAllProducts = async (req, res) => {
  try {
    const queries = { ...req.query };                           //Trỏ tới 2 vị trí khác nhau
    const excludeFields = ['limit', 'sort', 'page', 'fields']; //Tách các trường đặc biệt ra khỏi query
    excludeFields.forEach(el => delete queries[el]);            //Xóa những trường này khỏi queries, query vẫn giữ nguyên

    // Format lại cái đối tượng cho phù hợp với mongoose
    let queryString = JSON.stringify(queries); //Chuyển về string
    const operatorsMap = {
        gte: '$gte',
        gt: '$gt',
        lt: '$lt',
        lte: '$lte'
    };
    queryString = queryString.replace(/\b(gte|gt|lt|lte)\b/g, matchedElement => operatorsMap[matchedElement]);  // queryString = queryString.replace(/\b(gte|gt|lt|lte)\b/g, matchedElement => `$${matchedElement}`); //Lay duoc dau $
    const formatedQueries = JSON.parse(queryString);

    // Lọc
    if (queries?.name)
        formatedQueries.name = { $regex: queries.name, $options: 'i' }; //Tìm kiếm không cần điền hết tên, i là không phân biệt hoa thường
    let queryCommand = Product.find(formatedQueries);

    //Sắp xếp
    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ');
        queryCommand = queryCommand.sort(sortBy);
    }

    //Lấy những trường cần lấy hoặc bỏ những trường không cần
    if(req.query.fields) {
        const fields = req.query.fields.split(',').join(' ');
        queryCommand = queryCommand.select(fields);
    }


    // Phân trang
    //limit: số object muốn lấy 
    //skip: bỏ qua bao nhiêu bài
    let page = +req.query.page || 1;   //Lấy mặc định là 1, convert từ chuỗi qua số
    let limit = +req.query.limit|| process.env.LIMIT_PRODUCT;
    const skip = (page - 1) * limit;
    console.log(page, limit, skip);
    queryCommand.skip(skip).limit(limit);


    //Thực thi
    try {
        const response = await queryCommand.exec();
        const cnt = await Product.find(formatedQueries).countDocuments();
      
        return res.status(200).json({
          success: response ? true : false,
          cnt,
          product: response ? response : "Cannot get product",
        });
      } 
      catch (err) {
        throw new Error(err.message);
      }

  }
  catch (error) {
    throw new Error("error at getAllProduct of controller: ", error);
  }
};

const getProduct = async (req, res) => {
  try {
    const { pid } = req.params;
    const product = await Product.findById({ _id: pid });
    return res.status(200).json({
      success: product ? true : false,
      product: product ? product : "Cannot get product",
    });
  }
  catch (error) {
    throw new Error("Error at getProduct of controller: ", error);
  }
};

// Loi phan quyen admin, user van xoa duoc
const deleteProduct = async (req, res) => {
  try {
    const { pid } = req.params;
    const product = await Product.findByIdAndDelete(pid);
    return res.status(200).json({
      success: product ? true : false,
      product: product ? product : "Cannot delete product",
    });
  } catch (error) {
    throw new Error("Error at deleteProduct of controller: ", error);
  }
};

// bi loi phan quyen, user van update duoc
const updateProduct = async (req, res) => {
  try {
    const { pid } = req.params;
    if (req.body && req.body.name) req.body.slug = slugify(req.body.name);

    const product = await Product.findByIdAndUpdate(pid, req.body, {
      new: true,
    });
    return res.status(200).json({
      success: product ? true : false,
      product: product ? product : "Cannot update product",
    });
  } catch (error) {
    throw new Error("Error at updateProduct of controller: ", error);
  }
};

const deleteAllProduct = async (req, res) => {
  try {
    const product = Product.deleteMany();
    return res.status(200).json({
      success: product ? true : false,
      product: product ? product : "Cannot delete all product",
    });
  } catch (error) {
    throw new Error("Error at deleteAllProduct of controller: ", error);
  }
};

const uploadImagesProduct = async (req, res) => {
  try {
    const { pid } = req.params;
    if (!req.file)
      throw new Error('Missing inputs thumbnail');
    const response = await Product.findByIdAndUpdate(pid, { $push: { thumbnail: req.file.path } }, { new: true });

    if(response.thumbnail.length == 0) {
      response.thumbnail.push(req.file.path);
      response.save();
    }

    return res.status(200).json({
        status: response ? true:false,
        uploadThumbnailProduct: response ? response : "Cannot upload thumbnail product"
    })
  }
  catch(error) {
    throw new Error('Error at uploadImagesProduct of productController: ', error);
  }
  
};

module.exports = {
  createNewProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  deleteAllProduct,
  uploadImagesProduct,
};
