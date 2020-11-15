import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(
    /* webpackChunkName: "entranceDetail" */ 'containers/EntranceDetailPage'
  ),
)

export default dynamic
