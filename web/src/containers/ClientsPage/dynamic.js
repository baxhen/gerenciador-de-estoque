import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "clients" */ 'containers/ClientsPage'),
)

export default dynamic
