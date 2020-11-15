import { connect } from 'react-redux'
import { compose } from 'redux'

import EntranceDetail from './components/EntranceDetail'
import { selectEntrance } from 'containers/EntrancesPage/meta/selectors'

const mapStateToProps = (state, ownProps) => ({
  entrance: selectEntrance(state, ownProps.location.state._id),
})

const mapDispatchToProps = {}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(EntranceDetail)
