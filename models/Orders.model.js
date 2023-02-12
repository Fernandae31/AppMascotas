const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
    {
      dateOfPurchase: {
        type: Date,
        required: false,
      },
      paymentMethod: pMehtod,
      status: {
        enum: ["por enviar", "en camino", "entregado"]
      },
      products: [{type: Schema.Types.ObjectId, ref:"Product"}]
    }
)

const Order = model("Order", orderSchema);

module.exports = Order;