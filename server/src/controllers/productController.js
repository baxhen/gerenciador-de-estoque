const Product = require('../models/product')

exports.addProduct = (req, res) => {
  const { productId, name, description, category } = req.body
  const { user } = req
  if (!name || !productId || !description || !category) {
    res.status(422).send({
      error: 'You must provide the name, productId, description and categoryId',
    })
  }
  Product.findOne({ name }, async (err, existingProduct) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    if (existingProduct) {
      return res.status(422).send({ message: 'Produto já cadastrado' })
    }

    const product = new Product({
      productId,
      name,
      description,
      category,
      // eslint-disable-next-line
      user: user._id,
    })

    try {
      await product.save()
      // get the email and send a link to verify the email
      return res.send({ product })
    } catch (error) {
      // eslint-disable-next-line
      console.log(error)
      return res.status(500).send({ message: error.message })
    }
  })
}
exports.getProducts = (req, res) => {
  const {
    user: { _id },
  } = req

  Product.find({ user: _id })
    .populate('category')
    .select('productId name description category')
    .limit(7)
    .exec((err, products) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      return res.send({ products })
    })
}
exports.getProduct = (req, res) => {
  const { _id } = req.params

  if (!_id) {
    res.status(422).send({ error: 'You must provide the _id' })
  }
  Product.findOne(
    { _id },
    'productId name description category',
    (err, product) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      return res.send({ product })
    },
  )
}
exports.editProduct = (req, res) => {
  const { _id } = req.params
  const { productId, name, description, category } = req.body

  if (!name || !productId || !description || !category || !_id) {
    res.status(422).send({
      error:
        'You must provide the name, productId, description, categoryId and _id',
    })
  }
  const product = { _id, productId, name, description, category }
  Product.findOneAndUpdate(
    { _id },
    { productId, name, description, category },
    (err) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      return res.send({ product })
    },
  )
}
exports.deleteProduct = (req, res) => {
  const { _id } = req.params

  if (!_id) {
    res.status(422).send({ message: 'You must provide the _id' })
  }

  Product.deleteOne({ _id }, (err, response) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    if (response.n === 0) {
      return res
        .status(304)
        .send({ message: 'Produto não encontrado na base de dados' })
    }

    return res.status(204).send()
  })
}

exports.getProductByField = (req, res) => {
  const { name, value } = req.query

  if (!name || !value) {
    res.status(422).send({ error: 'You must provide the field' })
  }
  const search = {}
  search[name] = value

  if (name === 'name') {
    search[name] = { $regex: new RegExp(`.*${value}.*`, 'i') }
  }

  Product.find(
    { ...search },
    ).select('productId name description category').limit(7).exec((err, products) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      return res.send({ products })
    })
}
