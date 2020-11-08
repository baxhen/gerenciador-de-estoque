import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(
    /* webpackChunkName: "supplierDetail" */ 'containers/SupplierDetailPage'
  ),
)

export default dynamic
