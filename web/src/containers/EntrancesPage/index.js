import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import Entrances from './components/Entrances'
import { validate } from './meta/validate'
import { formFields } from './meta/configObjects'
import {
  getEntrances,
  getEntrancesByField,
  deleteEntrance,
} from './meta/actions'
import { selectEntrances } from './meta/selectors'
import { getSuppliers } from 'containers/SuppliersPage/meta/actions'
import { selectSuppliers } from 'containers/SuppliersPage/meta/selectors'

const mapStateToProps = (state) => ({
  formFields,
  entrances: selectEntrances(state),
  suppliers: selectSuppliers(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatchGetEntrances: () => dispatch(getEntrances()),
  dispatchDeleteEntrance: (payload) => dispatch(deleteEntrance(payload)),
  dispatchGetSuppliers: () => dispatch(getSuppliers()),
  dispatchGetEntrancesByField: (payload) =>
    dispatch(getEntrancesByField(payload)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const searchEntranceForm = reduxForm({ validate, form: 'searchEntrance' })

export default compose(withConnect, searchEntranceForm)(Entrances)
