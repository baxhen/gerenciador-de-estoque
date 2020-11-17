import _ from 'lodash'
import { formFields } from './configObjects'

const formattedFormFields = [...formFields, { name: 'category' }]

export const validate = (values) => {
  const errors = {}

  const isDirty = {
    entranceId: 0,
    startDate: 0,
    endDate: 0,
    supplier: 0,
  }

  _.each(formattedFormFields, ({ name }) => {
    if (values[name] !== '' && values[name] !== undefined) {
      isDirty[name] = 1
    } else {
      isDirty[name] = 0
    }
  })

  const total =
    isDirty.entranceId +
    isDirty.supplier +
    (isDirty.startDate + isDirty.endDate - 1)
  if (total > 1) {
    errors.search = 'Filtre a pesquisa com apenas um campo'
    errors._error = { ...errors }
  }
  return errors
}
