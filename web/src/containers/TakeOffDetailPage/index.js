import { connect } from 'react-redux'
import { compose } from 'redux'

import TakeOffDetail from './components/TakeOffDetail'
import { selectTakeOff } from 'containers/TakeOffsPage/meta/selectors'
import { selectProducts } from 'containers/ProductsPage/meta/selectors'
import { getProducts } from 'containers/ProductsPage/meta/actions'
import { selectClients } from 'containers/ClientsPage/meta/selectors'

const mapStateToProps = (state, ownProps) => ({
  takeOff: selectTakeOff(state, ownProps.location.state._id),
  allProducts: selectProducts(state),
  allClients: selectClients(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchGetProducts: () => dispatch(getProducts()),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(TakeOffDetail)
