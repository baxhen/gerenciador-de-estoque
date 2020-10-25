import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "products" */ 'containers/ProductsPage'),
)

export default dynamic
