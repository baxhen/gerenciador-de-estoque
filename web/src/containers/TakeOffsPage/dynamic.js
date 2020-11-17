import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "takeOff" */ 'containers/TakeOffsPage'),
)

export default dynamic
