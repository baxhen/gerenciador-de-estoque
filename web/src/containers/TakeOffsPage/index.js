import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import TakeOff from './components/TakeOff'
import { validate } from './meta/validate'
import { formFields } from './meta/configObjects'
import {
  getTakeOffs,
  getTakeOffsByField,
  deleteTakeOff,
} from './meta/actions'
import { selectTakeOffs } from './meta/selectors'
import { getClients } from 'containers/ClientsPage/meta/actions'
import { selectClients } from 'containers/ClientsPage/meta/selectors'

const mapStateToProps = (state) => ({
  formFields,
  takeOffs: selectTakeOffs(state),
  clients: selectClients(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchGetTakeOffs: () => dispatch(getTakeOffs()),
  dispatchDeleteTakeOff: (payload) => dispatch(deleteTakeOff(payload)),
  dispatchGetClients: () => dispatch(getClients()),
  dispatchGetTakeOffsByField: (payload) =>
    dispatch(getTakeOffsByField(payload)),
})


const withConnect = connect(mapStateToProps, mapDispatchToProps)
const searchTakeOffForm = reduxForm({ validate, form: 'searchTakeOff' })

export default compose(withConnect,searchTakeOffForm)(TakeOff)
