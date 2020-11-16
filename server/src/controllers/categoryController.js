const Category = require('../models/category')

exports.addCategory = async (req, res) => {
  const { name } = req.body
  const { user } = req
  if (!name) {
    res.status(422).send({ error: "You must provide the category's name" })
  }
  // eslint-disable-next-line
  Category.findOne({ name }, async (err, existingCategory) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    if (existingCategory) {
      return res.status(422).send({ message: 'Categoria já cadastrada' })
    }

    const category = new Category({
      name,
      // eslint-disable-next-line
      user: user._id,
    })

    try {
      await category.save()
      // get the email and send a link to verify the email
      res.send({ category: { name, _id: category._id } })
    } catch (error) {
      res.status(500).send({ message: error.message })
      // eslint-disable-next-line
      console.log(error)
    }
  })
}
exports.getCategories = (req, res) => {
  // const {
  //   user: { _id },
  // } = req

  Category.find(/*{ user: _id }*/)
    .select('name')
    .exec((err, categories) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      return res.send({ categories })
    })
}
exports.getCategory = (req, res) => {
  const { _id } = req.params

  Category.findOne({ _id }, 'name', (err, category) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    return res.send({ category })
  })
}
exports.editCategory = (req, res) => {
  const { _id } = req.params
  const { name } = req.body

  if (!name || !_id) {
    res.status(422).send({
      error: 'You must provide the name and _id',
    })
  }
  const category = { _id, name }
  Category.findOneAndUpdate({ _id }, { name }, (err) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    return res.send({ category })
  })
}
exports.deleteCategory = (req, res) => {
  const { _id } = req.params

  if (!_id) {
    res.status(422).send({ message: 'You must provide the _id' })
  }

  Category.deleteOne({ _id }, (err, response) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    if (response.n === 0) {
      return res
        .status(304)
        .send({ message: 'Categoria não encontrado na base de dados' })
    }

    return res.status(204).send()
  })
}
