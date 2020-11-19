import { connect } from 'react-redux'
import { compose } from 'redux'
import Stock from './components/Stock'
import { getStock } from './meta/actions'
import { selectStock } from './meta/selectors'

const mapStateToProps = (state) => ({
  stock: selectStock(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchGetStock: () => dispatch(getStock()),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(Stock)
