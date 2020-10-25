import { connect } from 'react-redux'
import { compose } from 'redux'
import Stock from './components/Stock'
import { getStock } from './meta/actions'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  getStock,
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(Stock)
