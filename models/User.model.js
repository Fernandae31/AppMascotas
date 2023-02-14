const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
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
    birthDay: {
      type: Date,
      required:false,
    },
    photo: {
      type:String,
      default: "https://s1.qwant.com/thumbr/474x474/b/d/abcd7d626c46523120741bf4795830dbb0f780511c292b059a80411ccc59ff/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.3-rUE4SORzLoGxaLp7KvLAHaHa%26pid%3DApi&q=0&b=1&p=0&a=0",
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type:String,
      required:true,
    },
    // PaymentMethod: [{ type: Schema.Types.ObjectId, ref: "PaymentMethod"}],

    // mascotas: [{ type: Schema.Types.ObjectId, ref: "Pet"}],

    // pedidos: [{type: Schema.Types.ObjectId, ref: "Pedido"}],

    // productos: [{type: Schema.Types.ObjectId, ref: "Producto"}],

    role: {
      type:String,
      enum: ["client", "admin"],
      default: "client",
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
