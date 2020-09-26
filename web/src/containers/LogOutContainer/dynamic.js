import DynamicComponent from 'components/Common/DynamicComponent';

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "logOut" */ 'containers/LogOutContainer')
);

export default dynamic;
