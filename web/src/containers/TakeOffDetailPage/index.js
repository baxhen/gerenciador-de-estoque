import { connect } from 'react-redux'
import { compose } from 'redux'

import TakeOffDetail from './components/TakeOffDetail'
import { selectTakeOff } from 'containers/TakeOffsPage/meta/selectors'

const mapStateToProps = (state, ownProps) => ({
  takeOff: selectTakeOff(state, ownProps.location.state._id),
})

const mapDispatchToProps = {}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(TakeOffDetail)
