import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'

import EditTakeOff from './components/EditTakeOff'
import { formFields } from './meta/configObjects'
import { validate } from './meta/validate'
import { selectClients } from 'containers/ClientsPage/meta/selectors'
import {
  editTakeOff,
} from 'containers/TakeOffsPage/meta/actions'
import { selectAddTakeOffErrorMessage } from 'containers/TakeOffsPage/meta/selectors'
import { selectTakeOff } from 'containers/TakeOffsPage/meta/selectors'
import { getProducts } from 'containers/ProductsPage/meta/actions'
import { getClients } from 'containers/ClientsPage/meta/actions'
import { selectProducts } from 'containers/ProductsPage/meta/selectors'

const mapStateToProps = (state, ownProps) => ({
  formFields,
  takeOff: selectTakeOff(state, ownProps.location.state._id),
  products: selectProducts(state),
  clients: selectClients(state),
  addTakeOffErrorMessage: selectAddTakeOffErrorMessage(state),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchEditTakeOff: (payload) => dispatch(editTakeOff(payload)),
    dispatchGetProducts: () => dispatch(getProducts()),
    dispatchGetClients: () => dispatch(getClients()),
  }
}
const withConnect = connect(mapStateToProps, mapDispatchToProps)
const takeOffForm = reduxForm({
  validate,
  form: 'takeOff',
})
export default compose(withConnect,takeOffForm)(EditTakeOff)
