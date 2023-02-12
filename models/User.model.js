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
      require:false,
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
    metodosPago: [{ type: Schema.Types.ObjectId, ref: "MetodoPago"}],

    mascotas: [{ type: Schema.Types.ObjectId, ref: "Pet" }],

    pedidos: [{type: Schema.Types.ObjectId, ref: "Pedido"}],

    productos: [{type: Schema.Types.ObjectId, ref: "Producto"}]
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
