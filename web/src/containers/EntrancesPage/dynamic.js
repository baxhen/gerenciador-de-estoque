import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "entrances" */ 'containers/EntrancesPage'),
)

export default dynamic
