const Entrance = require('../models/entrance')

exports.addEntrance = async (req, res) => {
  const { entranceId, products, supplier, formOfPayment } = req.body
  const { user } = req
  if (!entranceId || !supplier || !formOfPayment || products.length === 0) {
    res
      .status(422)
      .send({
        error:
          "You must provide the entrance's id, supplier, formOfPayment and products should not be empty",
      })
  }
  // eslint-disable-next-line
  Entrance.findOne({ entranceId }, async (err, existingEntrance) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    if (existingEntrance) {
      return res.status(422).send({ message: 'Entrada com id já cadastrado' })
    }

    const entrance = new Entrance({
      entranceId,
      products,
      supplier,
      formOfPayment,
      // eslint-disable-next-line
      user: user._id,
    })

    try {
      await entrance.save()
      // get the email and send a link to verify the email
      res.send({ entrance })
    } catch (error) {
      res.status(500).send({ message: error.message })
      // eslint-disable-next-line
      console.log(error)
    }
  })
}
exports.getEntrances = (req, res) => {
  const {
    user: { _id },
  } = req

  Entrance.find({ user: _id })
    // .select('name')
    .exec((err, entrances) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      return res.send({ entrances })
    })
}
exports.getCategory = (req, res) => {
  const { _id } = req.params

  Entrance.findOne({ _id }, 'name', (err, category) => {
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
  Entrance.findOneAndUpdate({ _id }, { name }, (err) => {
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

  Entrance.deleteOne({ _id }, (err, response) => {
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
