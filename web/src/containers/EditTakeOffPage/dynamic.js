import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "editTakeOff" */ 'containers/EditTakeOffPage'),
)

export default dynamic
