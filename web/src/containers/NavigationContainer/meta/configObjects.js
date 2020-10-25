import logo from '../../../assets/logo.png'

export const headerConfig = [
  {
    cond: 'Quando o usuário esta autenticado',
    // condition: { first: props.authenticated, second: true },
    logoTab: { logo, to: '/feature' },
    tabs: [
      { label: 'Feature', to: '/feature', className: 'tab' },
      { label: 'Sign Out', to: '/signout', className: 'lastTab' },
    ],
  },
  {
    cond: 'Quando o usuário não esta autenticado',
    // condition: { first: props.authenticated, second: false },
    logoTab: { label: 'Logo Aqui', to: '/' },
    tabs: [
      { label: 'Home', to: '/', className: 'tab' },
      { label: 'Login', to: '/login', className: 'tab' },
      { label: 'Cadastro', to: '/signup', className: 'lastTab' },
    ],
  },
]

export const linksConfig = [
  { path: '/', linkValue: 0 },
  { path: '/feature', linkValue: 0 },
  { path: '/signout', linkValue: 2 },
  // { path: '/about', linkValue: 1 },
  { path: '/signup', linkValue: 2 },
  { path: '/login', linkValue: 1 },
  { path: '/recoverPassword', linkValue: 2 },
]
