import DynamicComponent from 'components/Common/DynamicComponent'

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "about" */ 'containers/AboutPage'),
)

export default dynamic
