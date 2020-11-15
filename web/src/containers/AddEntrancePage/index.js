import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import { formFields } from './meta/configObjects'
import { validate } from './meta/validate'

import AddEntrance from './components/AddEntrance'
import { selectSuppliers } from 'containers/SuppliersPage/meta/selectors'
import { addEntrance } from 'containers/EntrancesPage/meta/actions'
import { selectAddEntranceErrorMessage } from 'containers/EntrancesPage/meta/selectors'
import { selectProducts } from 'containers/ProductsPage/meta/selectors'
import { getProducts } from 'containers/ProductsPage/meta/actions'

const mapStateToProps = (state) => ({
  formFields,
  suppliers: selectSuppliers(state),
  products: selectProducts(state),
  addEntranceErrorMessage: selectAddEntranceErrorMessage(state),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchAddEntrance: (payload) => dispatch(addEntrance(payload)),
    dispatchGetProducts: () => dispatch(getProducts()),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const entranceForm = reduxForm({
  validate,
  form: 'entrance',
})

export default compose(withConnect, entranceForm)(AddEntrance)
