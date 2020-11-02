import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "editProduct" */ 'containers/EditProductPage'),
)

export default dynamic
