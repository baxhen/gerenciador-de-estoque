import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "editSupplier" */ 'containers/EditSupplierPage'),
)

export default dynamic
