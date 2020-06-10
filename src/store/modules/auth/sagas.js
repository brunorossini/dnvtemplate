import { Alert } from 'react-native';
import { REHYDRATE } from 'redux-persist/lib/constants';
import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import api from '~/services/api';

import { Types } from './duck';

export function* signIn(payload) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield put({
      type: Types.SIGN_IN_SUCCESS,
      payload: { token, user },
    });

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seu email/senha'
    );

    yield put({
      type: Types.SIGN_FAILURE,
    });
  }
}

export function* signUp(payload) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    Alert.alert('Cadastrado realizado', 'Sucesso');
    // history.push('/');
  } catch (err) {
    Alert.alert('Ops!', 'Falha no cadastro, verifique seus dados');

    yield put({
      type: Types.SIGN_FAILURE,
    });
  }
}

const getToken = (state) => state.auth.token;

export function* setToken() {
  const token = yield select(getToken);
  api.defaults.headers.Authorization = `${token}`;
}

export default all([
  takeLatest(REHYDRATE, setToken),
  takeLatest(Types.SIGN_IN_REQUEST, signIn),
  takeLatest(Types.SIGN_UP_REQUEST, signUp),
]);
