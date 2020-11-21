const Entrance = require('../models/entrance')

exports.addEntrance = async (req, res) => {
  const { entranceId, products, supplier, formOfPayment } = req.body
  const { user } = req
  if (!entranceId || !supplier || !formOfPayment || products.length === 0) {
    res.status(422).send({
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
  // const {
  //   user: { _id },
  // } = req

  Entrance.find(/*{ user: _id }*/)
    // .select('name')
    .sort({date:-1})
    .exec((err, entrances) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      return res.send({ entrances })
    })
}

exports.getEntrancesByField = (req, res) => {
  const { entranceId, startDate, endDate, supplier } = req.query
  // const {
  //     user: { _id },
  //   } = req
  if (!entranceId && !startDate && !endDate && !supplier) {
    res.status(422).send({
      error: 'You must provide at least entranceId or startDate and endDate',
    })
  }
  const search = {}

  if (entranceId) {
    search.entranceId = { $regex: new RegExp(`.*${entranceId}.*`, 'i') }
  }
  if (supplier) {
    search.supplier = supplier
  }
  if (startDate && endDate) {
    search.date = { $gte: new Date(startDate), $lte: new Date(endDate) }
  }

  Entrance.find({ ...search /*user: _id*/ }).sort({date: -1}).exec((err, entrances) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    return res.send({ entrances })
  })
}
exports.getEntrance = (req, res) => {
  const { _id } = req.params

  Entrance.findOne({ _id }, (err, entrance) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    return res.send({ entrance })
  })
}
exports.editEntrance = (req, res) => {
  const { _id, entranceId, products, supplier, formOfPayment } = req.body

  if (!entranceId || !supplier || !formOfPayment || products.length === 0) {
    res.status(422).send({
      error:
        "You must provide the entrance's id, supplier, formOfPayment and products should not be empty",
    })
  }
  const totalPrice = () => {
    if (products.length === 1) {
      return products[0].quantity * products[0].unitPrice
    }
    return products.reduce((accumulator, currentValue) => {
      if (typeof accumulator !== 'number') {
        accumulator = accumulator.unitPrice * accumulator.quantity
      }
      return accumulator + currentValue.unitPrice * currentValue.quantity
    })
  }
  const entrance = { _id, entranceId, products, supplier, formOfPayment }
  Entrance.findOneAndUpdate(
    { _id },
    { entranceId, products, supplier, formOfPayment, totalPrice: totalPrice() },
    (err) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      return res.send({ entrance })
    },
  )
}
exports.deleteEntrance = (req, res) => {
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
        .send({ message: 'Entrada não encontrado na base de dados' })
    }

    return res.status(204).send()
  })
}
