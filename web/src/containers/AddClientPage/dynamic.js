import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "addClient" */ 'containers/AddClientPage'),
)

export default dynamic
