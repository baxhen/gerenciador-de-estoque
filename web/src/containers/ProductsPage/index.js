import { connect } from 'react-redux'
import { compose } from 'redux'
import Products from './components/Products'
import { getProductsPage } from './meta/actions'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  getProductsPage,
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(Products)
