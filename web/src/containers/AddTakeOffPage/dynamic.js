import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "addTakeOff" */ 'containers/AddTakeOffPage'),
)

export default dynamic
