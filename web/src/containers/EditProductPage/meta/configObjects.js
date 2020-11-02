import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField'
import { MultilineInputTextField } from 'components/ReduxForm/TextInput/MultilineInputTextField'
import { SelectField } from 'components/ReduxForm/Select/SelectField'

export const formFields = [
  // {
  //   label: 'ID do Produto',
  //   name: 'productId',
  //   type: 'text',
  //   className: 'input',
  //   noValueError: '',
  //   inputType: InputTextField,
  // },
  {
    label: 'Nome do Produto',
    name: 'name',
    type: 'text',
    className: 'input',
    noValueError: 'O nome do produto é obrigatório',
    inputType: InputTextField,
  },
  {
    label: 'Categoria',
    name: 'category',
    type: 'select',
    className: 'categorySelect',
    noValueError: 'A categoria é obrigatória',
    inputType: SelectField,
  },
  {
    label: 'Descrição do Produto',
    name: 'description',
    type: 'text',
    className: 'input',
    noValueError: 'A descrição do produto é obrigatória',
    inputType: MultilineInputTextField,
  },
]
