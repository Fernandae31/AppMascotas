const { Schema, model } = require("mongoose");

const petSchema = new Schema(
    {
      name: {
        type: String,
        required: false,
        trim: true,
      },
      age: {
        type: Number,
        require:false,
      },
      photo: {
        type:String,
      },
      breed: {
        type: String,
        required: true
      },
    }
)

const Pet = model("Pet", petSchema);

module.exports = Pet;