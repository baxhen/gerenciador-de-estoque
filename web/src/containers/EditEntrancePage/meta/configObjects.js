import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField'
import { SelectField } from 'components/ReduxForm/Select/SelectField'

export const formFields = [
  {
    label: 'ID da Entrada',
    name: 'entranceId',
    type: 'text',
    className: 'input',
    noValueError: '',
    inputType: InputTextField,
  },
  // {
  //   label: 'Produtos',
  //   name: 'products',
  //   type: 'text',
  //   className: 'select',
  //   noValueError: 'Selecione um produto',
  //   inputType: SelectField,
  // },
  {
    label: 'Fornecedor',
    name: 'supplier',
    type: 'select',
    className: 'supplierSelect',
    noValueError: 'O fornecedor é obrigatório',
    inputType: SelectField,
  },
  {
    label: 'Forma de Pagamento',
    name: 'formOfPayment',
    type: 'text',
    className: 'input',
    noValueError: 'A forma de pagamento é obrigatória',
    inputType: InputTextField,
  },
]
