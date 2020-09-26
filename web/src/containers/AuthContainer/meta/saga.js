import { all, takeLatest, put, select, call } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import networkService from '../../../utils/network';
import makeSelectLoginPage from '../../LoginPage/meta/selectors';
import makeSelectSignUp from '../../SignUpPage/meta/selectors';
import makeSelectRecoverPasswordPage from '../../RecoverPasswordPage/meta/selectors';
import { getEndpointURL } from '../../../utils/endpoint';
import {
  clearDataFromStorage,
  saveDataToStorage,
} from '../../../utils/cookies';
import { history } from '../../../history';

function* handleSignIn() {
  try {
    const loginPage = yield select(makeSelectLoginPage());
    const request = { email: loginPage.email, password: loginPage.password };
    const action = getEndpointURL('LOGIN');
    const response = yield call(networkService.postData, action, request);
    yield call(saveDataToStorage, response);
    yield put(actions.getAuthSuccess(response));
    history.push('/feature');
  } catch (error) {
    error.response.data === 'Unauthorized'
      ? yield put(actions.getAuthError({ message: 'Credenciais Inválidas' }))
      : console.log('Saga AuthContainer', error.response);
  }
}
function* handleSignUp() {
  try {
    const signUpPage = yield select(makeSelectSignUp());
    const request = { email: signUpPage.email, password: signUpPage.password };
    const action = getEndpointURL('SIGN_UP');
    const response = yield call(networkService.postData, action, request);
    yield call(saveDataToStorage, response);
    yield put(actions.getAuthSuccess(response));
    history.push('/feature');
  } catch (error) {
    const message = error.response.data.error;
    yield put(actions.getAuthError({ message }));
  }
}

function* handleLogOut() {
  yield call(clearDataFromStorage);
  history.push('/');
}
function* handleRecoverPassword() {
  try {
    const { email } = yield select(makeSelectRecoverPasswordPage());
    // const request = { email };
    // const action = getEndpointURL('RECOVER_PASSWORD');
    // const response = yield call(networkService.postData, action, request);
    // throw `O email ${email} não está cadastrado ou houve um problema interno no servidor`;
    yield put(
      actions.recoverPasswordSuccess({
        message: `Email de redefinição de senha enviado com sucesso para o email ${email}, verifique a sua caixa de entrada.`,
      })
    );
  } catch (error) {
    console.log(error);
    yield put(
      actions.recoverPasswordError({
        message: error,
      })
    );
  }
}

export default function* () {
  yield all([
    yield takeLatest(constants.GET_AUTH, handleSignIn),
    yield takeLatest(constants.LOGOUT, handleLogOut),
    yield takeLatest(constants.SIGN_UP, handleSignUp),
    yield takeLatest(constants.RECOVER_PASSWORD, handleRecoverPassword),
  ]);
}
