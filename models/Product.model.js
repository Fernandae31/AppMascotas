const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required:true,
    },
    photo: {
        type: String
    },
    category: {
      type:String,
      enum:["Food", "Toys", "Accesories", "Transportation"]
    },
    target: {
      type:String,
      enum:["Dog", "Cat", "Both"]
    }
  },

);

const Product = model("Product", productSchema);

module.exports = Product;
