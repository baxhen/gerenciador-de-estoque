import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "home" */ 'containers/HomePage'),
)

export default dynamic
