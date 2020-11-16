const mongoose = require('mongoose')
const { Schema } = mongoose

const clientSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  contacts: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    select: false,
  },
})

// create model class

const ModelClass = mongoose.model('Client', clientSchema)

// export the model

module.exports = ModelClass
