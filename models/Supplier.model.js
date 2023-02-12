const { Schema, model } = require("mongoose");

const supplierSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type:String,
    },
    direction: {
      type: String,
      required: true
    },
    telephone: {
      type:String,
      required:true,
    },

    pedidos: [{type: Schema.Types.ObjectId, ref: "Pedido"}],

    productos: [{type: Schema.Types.ObjectId, ref: "Producto"}]
    
  },
);

const Supplier = model("Supplier", supplierSchema);

module.exports = Supplier;
