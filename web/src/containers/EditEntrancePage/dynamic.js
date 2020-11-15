import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "editEntrance" */ 'containers/EditEntrancePage'),
)

export default dynamic
