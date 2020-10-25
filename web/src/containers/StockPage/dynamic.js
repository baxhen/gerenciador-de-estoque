import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "stock" */ 'containers/StockPage'),
)

export default dynamic
