const mongoose = require('mongoose')
const { Schema } = mongoose

const supplierSchema = new Schema({
  isCompany: { type: Boolean, required: true, default: true },
  name: { type: String, required: true, unique: true },
  supplierId: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  address: {
    street: { type: String },
    number: { type: Number },
    CEP: { type: Number },
    complement: { type: String },
    district: { type: String },
    city: { type: String },
    state: { type: String },
  },
  contact: { phone: { type: String }, email: { type: String } },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
})

// create model class

const ModelClass = mongoose.model('Supplier', supplierSchema)

// export the model

module.exports = ModelClass
