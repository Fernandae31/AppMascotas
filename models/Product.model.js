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
    keyNumber: {
      type: String,
      required: true
    },
    photo: {
        type: [String]
    },

    category: {
      type:String,
      enum:["food", "toys", "accesories", "transportation"]
    },

    target: {
      type:String,
      enum:["dog", "cat", "both"]
    }
  },

);

const Product = model("Product", productSchema);

module.exports = Product;
