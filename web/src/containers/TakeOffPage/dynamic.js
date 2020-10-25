import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "takeOff" */ 'containers/TakeOffPage'),
)

export default dynamic
