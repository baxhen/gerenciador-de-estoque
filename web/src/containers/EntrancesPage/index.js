import { connect } from 'react-redux'
import { compose } from 'redux'
import Entrances from './components/Entrances'
import { getEntrances } from './meta/actions'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  getEntrances,
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(Entrances)
