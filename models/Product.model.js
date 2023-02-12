const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      require:true,
    },
    keyNumber: {
      type: String,
      required: true
    },
    photo: {
        type: [String]
    },

    category: [{ type: Schema.Types.ObjectId, ref: "Pet"}],
    
  },

);

const Product = model("Product", productSchema);

module.exports = Product;
