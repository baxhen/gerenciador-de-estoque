const mongoose = require('mongoose')
const { Schema } = mongoose

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    select: false,
  },
})

// create model class

const ModelClass = mongoose.model('Category', categorySchema)

// export the model

module.exports = ModelClass
