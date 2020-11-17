import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "editClient" */ 'containers/EditClientPage'),
)

export default dynamic
