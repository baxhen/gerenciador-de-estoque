import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "addProduct" */ 'containers/AddProductPage'),
)

export default dynamic
