import { connect } from 'react-redux'
import { compose } from 'redux'
import Suppliers from './components/Suppliers'
import { getSuppliersPage } from './meta/actions'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  getSuppliersPage,
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(Suppliers)
