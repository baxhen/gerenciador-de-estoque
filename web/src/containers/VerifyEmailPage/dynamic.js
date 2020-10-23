import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "verifyEmail" */ 'containers/VerifyEmailPage'),
)

export default dynamic
