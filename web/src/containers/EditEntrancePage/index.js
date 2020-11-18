import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import EditEntrance from './components/EditEntrance'
import { formFields } from './meta/configObjects'
import { validate } from './meta/validate'
import { selectSuppliers } from 'containers/SuppliersPage/meta/selectors'
import { editEntrance } from 'containers/EntrancesPage/meta/actions'
import { selectAddEntranceErrorMessage } from 'containers/EntrancesPage/meta/selectors'
import { selectEntrance } from 'containers/EntrancesPage/meta/selectors'
import { getProducts } from 'containers/ProductsPage/meta/actions'
import { getSuppliers } from 'containers/SuppliersPage/meta/actions'
import { selectProducts } from 'containers/ProductsPage/meta/selectors'

const mapStateToProps = (state, ownProps) => ({
  formFields,
  entrance: selectEntrance(state, ownProps.location.state._id),
  products: selectProducts(state),
  suppliers: selectSuppliers(state),
  addEntranceErrorMessage: selectAddEntranceErrorMessage(state),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchEditEntrance: (payload) => dispatch(editEntrance(payload)),
    dispatchGetProducts: () => dispatch(getProducts()),
    dispatchGetSuppliers: () => dispatch(getSuppliers()),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const entranceForm = reduxForm({
  validate,
  form: 'entrance',
})
export default compose(withConnect, entranceForm)(EditEntrance)
