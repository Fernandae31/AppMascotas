const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
    {
      paymentMethod:{type: Schema.Types.ObjectId, ref:"PaymentMethod"},
      status: {
        type: String,
        enum: ["por enviar", "en camino", "entregado"],
        default: "por enviar"
      },
      products: [{type: Schema.Types.ObjectId, ref:"Product"}]
    },
    {
      timestamps: true,
    }
)

const Order = model("Order", orderSchema);

module.exports = Order;