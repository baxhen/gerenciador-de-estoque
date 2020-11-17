import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(
    /* webpackChunkName: "takeOffDetail" */ 'containers/TakeOffDetailPage'
  ),
)

export default dynamic
