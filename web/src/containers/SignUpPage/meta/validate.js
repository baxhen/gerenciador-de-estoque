import _ from 'lodash';
import { validateEmail } from 'utils/HelperFunctions';

export const formFields = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    className: 'input',
    noValueError: 'Digite seu email',
  },
  {
    label: 'Senha',
    name: 'password',
    type: 'password',
    className: 'input',
    noValueError: 'Digite sua senha',
  },
  {
    label: 'Confirme a Senha',
    name: 'confirmPassword',
    type: 'password',
    className: 'input',
    noValueError: 'Digite a confirmação de senha',
  },
];

export const validate = (values) => {
  const errors = {};
  errors.email = validateEmail(values.email || '');
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'As senhas não conferem';
  }

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) errors[name] = noValueError;
  });

  return errors;
};
