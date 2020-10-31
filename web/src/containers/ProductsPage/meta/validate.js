import _ from 'lodash'
import { formFields } from './configObjects'

const formattedFormFields = [...formFields, { name: 'category' }]

export const validate = (values) => {
  const errors = {}

  const isDirty = {
    productId: 0,
    name: 0,
    category: 0,
  }

  _.each(formattedFormFields, ({ name }) => {
    if (values[name] !== '' && values[name] !== undefined) {
      isDirty[name] = 1
    } else {
      isDirty[name] = 0
    }
  })

  const total = isDirty.category + isDirty.name + isDirty.productId
  if (total > 1) {
    errors.search = 'Filtre a pesquisa com apenas um campo'
    errors._error = { ...errors }
  }
  return errors
}
