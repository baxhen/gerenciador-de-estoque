import { connect } from 'react-redux'
import { compose } from 'redux'

import ProductDetail from './components/ProductDetail'

import {
  selectProduct,
  selectCategories,
} from 'containers/ProductsPage/meta/selectors'

const mapStateToProps = (state, ownProps) => ({
  product: selectProduct(state, ownProps.location.state._id),
  categories: selectCategories(state),
})

const mapDispatchToProps = {}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(ProductDetail)
