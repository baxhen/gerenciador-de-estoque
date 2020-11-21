import { connect } from 'react-redux'
import { compose } from 'redux'

import EntranceDetail from './components/EntranceDetail'
import { selectEntrance } from 'containers/EntrancesPage/meta/selectors'
import { selectProducts } from 'containers/ProductsPage/meta/selectors'
import { selectSuppliers } from 'containers/SuppliersPage/meta/selectors'
import { getProducts } from 'containers/ProductsPage/meta/actions'

const mapStateToProps = (state, ownProps) => ({
  entrance: selectEntrance(state, ownProps.location.state._id),
  allProducts: selectProducts(state),
  allSuppliers: selectSuppliers(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchGetProducts: () => dispatch(getProducts()),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(EntranceDetail)
