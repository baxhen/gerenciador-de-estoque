const Client = require('../models/client')

exports.addClient = (req, res) => {
  const { isCompany, name, socialReason, CPF, CNPJ, contacts } = req.body
  const { user } = req
  if (
    typeof isCompany !== 'boolean' ||
    (!name && !socialReason) ||
    (!CPF && !CNPJ) ||
    !contacts
  ) {
    res.status(422).send({
      error:
        'You must provide the isCNPJ, name or socialReason, CPF or CNPJ, description, address and contacts',
    })
  }

  Client.findOne(
    isCompany ? { socialReason } : { name },
    async (err, existingSupplier) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      if (existingSupplier) {
        return res.status(422).send({ message: 'Cliente já cadastrado' })
      }
      let clientObject = {}
      if (isCompany) {
        clientObject = {
          isCompany,
          socialReason,
          CNPJ,
          contacts,
          // eslint-disable-next-line
          user: user._id,
        }
      } else {
        clientObject = {
          isCompany,
          name,
          CPF,
          contacts,
          // eslint-disable-next-line
          user: user._id,
        }
      }

      const client = new Client(clientObject)

      try {
        await client.save()
        // get the email and send a link to verify the email
        return res.send({ client })
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
        return res.status(500).send({ message: error.message })
      }
    },
  )
}
exports.getClients = (req, res) => {
  // const {
  //   user: { _id },
  // } = req

  Client.find(/*{ user: _id }*/)
    .select('-user')
    .exec((err, clients) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      return res.send({ clients })
    })
}
exports.getClient = (req, res) => {
  const { _id } = req.params

  if (!_id) {
    res.status(422).send({ error: 'You must provide the _id' })
  }
  Client.findOne({ _id }, '-user', (err, client) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    return res.send({ client })
  })
}
exports.editClient = (req, res) => {
  const {
    isCompany,
    _id,
    name,
    socialReason,
    CPF,
    CNPJ,
    address,
    description,
    contacts,
  } = req.body

  if (
    typeof isCompany !== 'boolean' ||
    (!name && !socialReason) ||
    (!CPF && !CNPJ) ||
    !contacts
  ) {
    res.status(422).send({
      error:
        'You must provide the isCNPJ, name or socialReason, CPF or CNPJ and contacts',
    })
  }

  let client = {}
  if (isCompany) {
    client = {
      isCompany,
      socialReason,
      CNPJ,
      contacts,
    }
  } else {
    client = {
      isCompany,
      name,
      CPF,
      contacts,
    }
  }
  Client.findOneAndUpdate({ _id }, client, (err) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    return res.send({ client })
  })
}
exports.deleteClient = (req, res) => {
  const { _id } = req.params

  if (!_id) {
    res.status(422).send({ message: 'You must provide the _id' })
  }

  Client.deleteOne({ _id }, (err, response) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    if (response.n === 0) {
      return res
        .status(304)
        .send({ message: 'Fornecedor não encontrado na base de dados' })
    }

    return res.status(204).send()
  })
}

exports.getClientByField = (req, res) => {
  const { name, value } = req.query
  // const {
  //   user: { _id },
  // } = req

  if (!name || !value) {
    res.status(422).send({ error: 'You must provide the field' })
  }
  const search = {}
  search[name] = value

  let query = {}

  if (name === 'name' || name === 'socialReason') {
    query = {
      $or: [
        { name: { $regex: new RegExp(`.*${value}.*`, 'i') } },
        { socialReason: { $regex: new RegExp(`.*${value}.*`, 'i') } },
      ],
    }
  }
  if (name === 'CPF' || name === 'CNPJ') {
    query = {
      $or: [
        { CPF: { $regex: new RegExp(`.*${value}.*`, 'i') } },
        { CNPJ: { $regex: new RegExp(`.*${value}.*`, 'i') } },
      ],
    }
  }

  Client.find({ ...query /*user: _id*/ })
    .select('-user')
    .limit(7)
    .exec((err, clients) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      return res.send({ clients })
    })
}
