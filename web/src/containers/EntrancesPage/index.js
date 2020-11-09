import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import Entrances from './components/Entrances'
import { validate } from './meta/validate'
import { formFields } from './meta/configObjects'
import { getEntrances } from './meta/actions'
import { selectEntrances } from './meta/selectors'

const mapStateToProps = (state) => ({
  formFields,
  entrances: selectEntrances(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchGetEntrances: () => dispatch(getEntrances()),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const searchEntranceForm = reduxForm({ validate, form: 'searchEntrance' })

export default compose(withConnect, searchEntranceForm)(Entrances)
