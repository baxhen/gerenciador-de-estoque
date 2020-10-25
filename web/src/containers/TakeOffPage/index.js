import { connect } from 'react-redux'
import { compose } from 'redux'
import TakeOff from './components/TakeOff'
import { getTakeOffPage } from './meta/actions'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  getTakeOffPage,
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(TakeOff)
