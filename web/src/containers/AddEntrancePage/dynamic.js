import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "addEntrance" */ 'containers/AddEntrancePage'),
)

export default dynamic
