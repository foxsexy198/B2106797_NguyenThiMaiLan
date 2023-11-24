const mongoose = require("mongoose");

let productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    classify: {
      type: String,
      default: "1kg",
    },
    quantity: {
      type: Number,
      default: 0,
    },
    available: {
      type: Boolean,
      default: true,
    },
    thumbnail: {
      type: Array,
      default: [],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
