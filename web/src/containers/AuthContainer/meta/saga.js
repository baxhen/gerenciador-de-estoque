import { all, takeLatest, put, select, call } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import networkService from '../../../utils/network';
import makeSelectLoginPage from '../../LoginPage/meta/selectors';
import makeSelectSignUp from '../../SignUpPage/meta/selectors';
import makeSelectRecoverPasswordPage from '../../RecoverPasswordPage/meta/selectors';
import makeSelectResetPasswordPage from '../../ResetPasswordPage/meta/selectors';
import makeSelectVerifyEmailPage from '../../VerifyEmailPage/meta/selectors'
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
    error.response.data.message
      ? yield put(actions.getAuthError({ message: error.response.data.message}))
      : yield put(actions.getAuthError({ message: 'Credenciais Inválidas' }))
  }
}
function* handleSignUp() {
  try {
    const signUpPage = yield select(makeSelectSignUp());
    const request = { email: signUpPage.email, password: signUpPage.password, username: signUpPage.username };
    const action = getEndpointURL('SIGN_UP');
    const response = yield call(networkService.postData, action, request);  
    const { message } = response;
    yield put(actions.getAuthFeedback({ message }));  
  } catch (error) {
    const { message } = error.response.data;
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
    const request = { email };
    const action = getEndpointURL('RECOVER_PASSWORD');
    yield call(networkService.postData, action, request);

    yield put(
      actions.recoverPasswordSuccess({
        message: `Email de redefinição de senha enviado com sucesso para o email ${email}, verifique a sua caixa de entrada.`,
      })
    );
  } catch (error) {
    console.log(error);
    const message = error.response.data.message;
    yield put(
      actions.recoverPasswordError({
        message,
      })
    );
  }
}
function* handleResetPassword() {
  try {
    const { email, password, token } = yield select(
      makeSelectResetPasswordPage()
    );
    const request = { email, password, token };
    const action = getEndpointURL('RESET_PASSWORD');
    const { message } = yield call(networkService.postData, action, request);

    yield put(
      actions.resetPasswordFeedback({
        message,
      })
    );
  } catch (error) {
    console.log(error.response);
    yield put(
      actions.resetPasswordFeedback({
        message: error.response.data.message,
      })
    );
  }
}
function* handleVerifyEmail() {
  try {
    const {email, token} = yield select(
      makeSelectVerifyEmailPage()
    );
    const request = { email, token };
    const action = getEndpointURL('VERIFY_EMAIL');
    const { message } = yield call(networkService.postData, action, request);

    yield put(
      actions.verifyEmailFeedback({
        message,
      })
    );
  } catch (error) {
    console.log(error.response);
    yield put(
      actions.verifyEmailFeedback({
        message: error.response.data.message,
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
    yield takeLatest(constants.RESET_PASSWORD, handleResetPassword),
    yield takeLatest(constants.VERIFY_EMAIL, handleVerifyEmail),
  ]);
}
