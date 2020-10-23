import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(
    /* webpackChunkName: "recoverPassword" */ 'containers/RecoverPasswordPage'
  ),
)

export default dynamic
