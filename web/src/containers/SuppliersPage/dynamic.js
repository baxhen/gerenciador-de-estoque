import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "suppliers" */ 'containers/SuppliersPage'),
)

export default dynamic
