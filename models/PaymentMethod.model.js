const { Schema, model } = require("mongoose");

const PaymentMethodSchema = new Schema(
    {
      number: {
        type: String,
        required: false,
        trim: true,
      },
      expirationMonth: {
        type: String,
        required:true,
      },
      expirationYear: {
        type:String,
        required:true
      },
      cvv: {
        type: Number,
        required: true
      },
      issuingBank:{type: Schema.Types.ObjectId, ref:"Bank"}
    }
)

const PaymentMethod = model("PaymentMethod", pMethodSchema);

module.exports = PaymentMethod;