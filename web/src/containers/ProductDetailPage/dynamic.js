import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(
    /* webpackChunkName: "productDetail" */ 'containers/ProductDetailPage'
  ),
)

export default dynamic
