const mongoose = require('mongoose')
const { Schema } = mongoose

const supplierSchema = new Schema({
  isCompany: { type: Boolean, required: true },
  name: {
    type: String,
    required: function () {
      return !this.isCompany
    },
    index: true,
    unique: true,
    sparse: true,
  },
  socialReasonName: {
    type: String,
    required: function () {
      return this.isCompany
    },
    index: true,
    unique: true,
    sparse: true,
  },
  CPF: {
    type: String,
    required: function () {
      return !this.isCompany
    },
    index: true,
    unique: true,
    sparse: true,
  },
  CNPJ: {
    type: String,
    required: function () {
      return this.isCompany
    },
    index: true,
    unique: true,
    sparse: true,
  },
  address: {
    CEP: { type: String, required: true },
    street: { type: String, required: true },
    complement: { type: String },
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    streetNumber: { type: String, required: true },
  },
  description: { type: String, required: true },
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

const ModelClass = mongoose.model('Supplier', supplierSchema)

// export the model

module.exports = ModelClass
