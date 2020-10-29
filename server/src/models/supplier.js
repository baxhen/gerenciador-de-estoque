const mongoose = require('mongoose')
const { Schema } = mongoose

const supplierSchema = new Schema({
  isCompany: { type: Boolean, required: true },
  name: {
    type: String,
    // eslint-disable-next-line
    required: function () {
      return !this.isCompany
    },
    unique: true,
    // eslint-disable-next-line
    default: function () {
      // eslint-disable-next-line
      return this._id
    },
  },
  socialReason: {
    type: String,
    // eslint-disable-next-line
    required: function () {
      return this.isCompany
    },
    unique: true,
    // eslint-disable-next-line
    default: function () {
      // eslint-disable-next-line
      return this._id
    },
  },
  CPF: {
    type: String,
    // eslint-disable-next-line
    required: function () {
      return !this.isCompany
    },
    unique: true,
    // eslint-disable-next-line
    default: function () {
      // eslint-disable-next-line
      return this._id
    },
  },
  CNPJ: {
    type: String,
    // eslint-disable-next-line
    required: function () {
      return this.isCompany
    },
    unique: true,
    // eslint-disable-next-line
    default: function () {
      // eslint-disable-next-line
      return this._id
    },
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
