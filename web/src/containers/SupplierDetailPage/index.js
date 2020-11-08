import { connect } from 'react-redux'
import { compose } from 'redux'

import SupplierDetail from './components/SupplierDetail'
import { selectSupplier } from 'containers/SuppliersPage/meta/selectors'

const mapStateToProps = (state, ownProps) => ({
  supplier: selectSupplier(state, ownProps.location.state._id),
})

const mapDispatchToProps = {}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(SupplierDetail)
