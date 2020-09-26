import DynamicComponent from 'components/Common/DynamicComponent';

const dynamic = DynamicComponent(() =>
  import(/* webpackChunkName: "feature" */ 'containers/FeaturePage')
);

export default dynamic;
