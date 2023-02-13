const { Schema, model } = require("mongoose");

const petSchema = new Schema(
    {
      name: {
        type: String,
        required: false,
        trim: true,
      },
      age: {
        type: Date,
        required:false,
      },
      photo: {
        type:String,
        default: ""
      },
      specie: {
        type: String,
        required: true,
        enum: ["dog", "cat"]
      },
    },
    {
      timestamps:true,
    }

)

const Pet = model("Pet", petSchema);

module.exports = Pet;