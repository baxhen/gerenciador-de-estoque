const TakeOff = require('../models/takeOff')

exports.addTakeOff = async (req, res) => {
  const { takeOffId, products, client, formOfPayment } = req.body
  const { user } = req
  if (!takeOffId || !client || !formOfPayment || products.length === 0) {
    res.status(422).send({
      error:
        "You must provide the entrance's id, client, formOfPayment and products should not be empty",
    })
  }
  // eslint-disable-next-line
  TakeOff.findOne({ takeOffId }, async (err, existingEntrance) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    if (existingEntrance) {
      return res.status(422).send({ message: 'Entrada com id já cadastrado' })
    }

    const takeOff = new TakeOff({
      takeOffId,
      products,
      client,
      formOfPayment,
      // eslint-disable-next-line
      user: user._id,
    })

    try {
      await takeOff.save()
      // get the email and send a link to verify the email
      res.send({ takeOff })
    } catch (error) {
      res.status(500).send({ message: error.message })
      // eslint-disable-next-line
      console.log(error)
    }
  })
}
exports.getTakeOffs = (req, res) => {
  // const {
  //   user: { _id },
  // } = req

  TakeOff.find(/*{ user: _id }*/)
    // .select('name')
    .sort({date:-1})
    .exec((err, takeOffs) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      return res.send({ takeOffs })
    })
}

exports.getTakeOffsByField = (req, res) => {
  const { takeOffId, startDate, endDate, client } = req.query
  // const {
  //     user: { _id },
  //   } = req
  if (!takeOffId && !startDate && !endDate && !client) {
    res.status(422).send({
      error: 'You must provide at least takeOffId or startDate and endDate',
    })
  }
  const search = {}

  if (takeOffId) {
    search.takeOffId = { $regex: new RegExp(`.*${takeOffId}.*`, 'i') }
  }
  if (client) {
    search.client = client
  }
  if (startDate && endDate) {
    search.date = { $gte: new Date(startDate), $lte: new Date(endDate) }
  }

  TakeOff.find({ ...search /*user: _id*/ }).sort({date:-1}).exec((err, takeOffs) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    return res.send({ takeOffs })
  })
}
exports.getTakeOff = (req, res) => {
  const { _id } = req.params

  TakeOff.findOne({ _id }, (err, entrance) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    return res.send({ entrance })
  })
}
exports.editTakeOff = (req, res) => {
  const { _id, takeOffId, products, client, formOfPayment } = req.body

  if (!takeOffId || !client || !formOfPayment || products.length === 0) {
    res.status(422).send({
      error:
        "You must provide the entrance's id, client, formOfPayment and products should not be empty",
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
  const entrance = { _id, takeOffId, products, client, formOfPayment }
  TakeOff.findOneAndUpdate(
    { _id },
    { takeOffId, products, client, formOfPayment, totalPrice: totalPrice() },
    (err) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      return res.send({ entrance })
    },
  )
}
exports.deleteTakeOff = (req, res) => {
  const { _id } = req.params

  if (!_id) {
    res.status(422).send({ message: 'You must provide the _id' })
  }

  TakeOff.deleteOne({ _id }, (err, response) => {
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
