import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "dashboard" */ 'containers/DashboardPage'),
)

export default dynamic
