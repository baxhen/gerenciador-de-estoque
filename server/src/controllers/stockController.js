const Entrance = require('../models/entrance')
const TakeOff = require('../models/takeOff')

exports.getStock = async (req, res) => {
  // const {
  //   user: { _id },
  // } = req

  const productsQuantityFilter = [
    {
      $project: {
        'products.product': 1,
        'products.quantity': 1,
      },
    },
    {
      $unwind: {
        path: '$products',
        preserveNullAndEmptyArrays: false,
      },
    },
    {
      $group: {
        _id: '$products.product',
        quantity: {
          $sum: '$products.quantity',
        },
      },
    },
    {
      $lookup: {
        from: 'products',
        localField: '_id',
        foreignField: '_id',
        as: 'product',
      },
    },
    {
      $unwind: {
        path: '$product',
        preserveNullAndEmptyArrays: false,
      },
    },
    {
      $project: {
        _id: 1,
        name: '$product.name',
        productId: '$product.productId',
        quantity: 1,
        category: '$product.category',
      },
    },
  ]

  const totalEntranceProducts = await Entrance.aggregate(productsQuantityFilter)
  const totalTakeOffProducts = await TakeOff.aggregate(productsQuantityFilter)
  const stock = totalEntranceProducts.map((product) => {
    totalTakeOffProducts.forEach((tkProduct) => {
      if (product._id.toString() === tkProduct._id.toString()) {
        product.quantity = product.quantity - tkProduct.quantity
      }
    })
    return product
  })

  stock.sort(sortStockQuantity)

  res.send({ stock })
}

const sortStockQuantity = (a, b) => {
  if (a.quantity < b.quantity) {
    return -1
  }
  if (a.quantity > b.quantity) {
    return 1
  }
  return 0
}
