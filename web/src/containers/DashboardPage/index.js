import { connect } from 'react-redux'
import { compose } from 'redux'

import Dashboard from './components/Dashboard'

import requireAuth from '../../components/HighOrderComponents/requireAuth'
import { menuItems } from './meta/configObjects'

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
  menuItems
})

const mapDispatchToProps = (dispatch) => ({})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect, requireAuth)(Dashboard)
