import { connect } from 'react-redux'
import { compose } from 'redux'

import ClientDetail from './components/ClientDetail'
import { selectClient } from 'containers/ClientsPage/meta/selectors'

const mapStateToProps = (state, ownProps) => ({
  client: selectClient(state, ownProps.location.state._id),
})

const mapDispatchToProps = {}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(ClientDetail)
