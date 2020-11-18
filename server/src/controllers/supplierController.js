const Supplier = require('../models/supplier')

exports.addSupplier = (req, res) => {
  const {
    isCompany,
    name,
    socialReason,
    CPF,
    CNPJ,
    address,
    description,
    contacts,
  } = req.body
  const { user } = req
  if (
    typeof isCompany !== 'boolean' ||
    (!name && !socialReason) ||
    (!CPF && !CNPJ) ||
    !description ||
    !address ||
    !address.CEP ||
    !address.street ||
    !address.streetNumber ||
    !address.complement ||
    !address.city ||
    !address.state ||
    !contacts
  ) {
    res.status(422).send({
      error:
        'You must provide the isCNPJ, name or socialReason, CPF or CNPJ, description, address and contacts',
    })
  }

  Supplier.findOne(
    isCompany ? { socialReason } : { name },
    async (err, existingSupplier) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      if (existingSupplier) {
        return res.status(422).send({ message: 'Fornecedor já cadastrado' })
      }
      let supplierObject = {}
      if (isCompany) {
        supplierObject = {
          isCompany,
          socialReason,
          CNPJ,
          address,
          description,
          contacts,
          // eslint-disable-next-line
          user: user._id,
        }
      } else {
        supplierObject = {
          isCompany,
          name,
          CPF,
          address,
          description,
          contacts,
          // eslint-disable-next-line
          user: user._id,
        }
      }

      const supplier = new Supplier(supplierObject)

      try {
        await supplier.save()
        // get the email and send a link to verify the email
        return res.send({ supplier })
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
        return res.status(500).send({ message: error.message })
      }
    },
  )
}
exports.getSuppliers = (req, res) => {
  // const {
  //   user: { _id },
  // } = req

  Supplier.find(/*{ user: _id }*/)
    .select('-user')
    .exec((err, suppliers) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      return res.send({ suppliers })
    })
}
exports.getSupplier = (req, res) => {
  const { _id } = req.params

  if (!_id) {
    res.status(422).send({ error: 'You must provide the _id' })
  }
  Supplier.findOne({ _id }, '-user', (err, supplier) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    return res.send({ supplier })
  })
}
exports.editSupplier = (req, res) => {
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
    !description ||
    !address ||
    !address.CEP ||
    !address.street ||
    !address.streetNumber ||
    !address.complement ||
    !address.city ||
    !address.state ||
    !contacts
  ) {
    res.status(422).send({
      error:
        'You must provide the isCNPJ, name or socialReason, CPF or CNPJ, description, address and contacts',
    })
  }

  let supplier = {}
  if (isCompany) {
    supplier = {
      isCompany,
      socialReason,
      CNPJ,
      address,
      description,
      contacts,
    }
  } else {
    supplier = {
      isCompany,
      name,
      CPF,
      address,
      description,
      contacts,
    }
  }
  Supplier.findOneAndUpdate({ _id }, supplier, (err) => {
    if (err) {
      return res.status(500).send({ message: err.message })
    }

    return res.send({ supplier })
  })
}
exports.deleteSupplier = (req, res) => {
  const { _id } = req.params

  if (!_id) {
    res.status(422).send({ message: 'You must provide the _id' })
  }

  Supplier.deleteOne({ _id }, (err, response) => {
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

exports.getSupplierByField = (req, res) => {
  const { name, value } = req.query
  // const {
  //   user: { _id },
  // } = req

  if (!name || !value) {
    res.status(422).send({ error: 'You must provide the field' })
  }
  let query = {}

  if (name === 'name' || name === 'socialReason') {
    query = {
      $or: [
        { name: { $regex: new RegExp(`.*${value}.*`, 'i') } },
        { socialReason: { $regex: new RegExp(`.*${value}.*`, 'i') } },
      ],
    }
  }
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

  Supplier.find({...query, /*user: _id*/})
    .select('-user')
    .limit(7)
    .exec((err, suppliers) => {
      if (err) {
        return res.status(500).send({ message: err.message })
      }

      return res.send({ suppliers })
    })
}
