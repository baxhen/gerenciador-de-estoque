import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "clientDetail" */ 'containers/ClientDetailPage'),
)

export default dynamic
