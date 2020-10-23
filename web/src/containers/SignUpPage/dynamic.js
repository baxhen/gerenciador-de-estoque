import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "signUp" */ 'containers/SignUpPage'),
)

export default dynamic
