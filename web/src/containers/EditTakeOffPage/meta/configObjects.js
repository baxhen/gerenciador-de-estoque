import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField'
import { SelectField } from 'components/ReduxForm/Select/SelectField'

export const formFields = [
  {
    label: 'ID da Saída',
    name: 'takeOffId',
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
    label: 'Cliente',
    name: 'client',
    type: 'select',
    className: 'supplierSelect',
    noValueError: 'O cliente é obrigatório',
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
