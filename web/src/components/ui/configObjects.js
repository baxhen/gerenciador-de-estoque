export const headerConfig = [
  {
    cond: 'Quando o usuário esta autenticado',
    // condition: { first: props.authenticated, second: true },
    logoTab: { label: 'Logo Aqui', to: '/feature' },
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
      { label: 'Sign Up', to: '/signup', className: 'tab' },
      { label: 'Sign In', to: '/signin', className: 'lastTab' },
    ],
  },
];

export const linksConfig = [
  { path: '/', linkValue: 0 },
  { path: '/feature', linkValue: 0 },
  { path: '/signout', linkValue: 1 },
  { path: '/signup', linkValue: 1 },
  { path: '/signin', linkValue: 2 },
];
