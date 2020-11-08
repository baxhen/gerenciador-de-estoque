import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "addSupplier" */ 'containers/AddSupplierPage'),
)

export default dynamic
