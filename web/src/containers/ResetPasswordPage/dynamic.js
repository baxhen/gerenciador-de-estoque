import DynamicComponent from 'components/Common/DynamicComponent';

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "resetPassword" */ 'containers/ResetPasswordPage')
);

export default dynamic;
