const mongoose = require('mongoose')
const { Schema } = mongoose

const entranceSchema = new Schema({
  entranceId: { type: String, required: true, unique: true },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      unitPrice: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  supplier: { type: Schema.Types.ObjectId, ref: 'Supplier', required: true },
  formOfPayment: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  totalPrice: {
    type: Number,
    default: function () {
      if (this.products.length === 1) {
        return this.products[0].quantity * this.products[0].unitPrice
      }
      return this.products.reduce((accumulator, currentValue) => {
        if (typeof accumulator !== 'number') {
          accumulator = accumulator.unitPrice * accumulator.quantity
        }
        return accumulator + currentValue.unitPrice * currentValue.quantity
      })
    },
  },
  receipt: {
    type: String,
    default:
      'https://cdn.pixabay.com/photo/2020/09/28/16/05/cash-register-5610295__340.jpg',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    select: false,
  },
})

// create model class

const ModelClass = mongoose.model('Entrance', entranceSchema)

// export the model

module.exports = ModelClass
