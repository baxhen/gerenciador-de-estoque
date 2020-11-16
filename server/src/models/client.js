const mongoose = require('mongoose')
const { Schema } = mongoose

const clientSchema = new Schema({
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
  socialReason: {
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
