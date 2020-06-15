import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { Types } from './duck';

export function* companies() {
  try {
    const response = yield call(api.get, 'companies');

    yield put({
      type: Types.COMPANIES_SUCCESS,
      payload: { companies: response.data },
    });
  } catch (err) {
    Alert.alert(
      'Falha na requisição',
      'Houve um erro ao solicitar os estabelecimentos'
    );

    yield put({
      type: Types.COMPANIES_FAILURE,
    });
  }
}

export default all([takeLatest(Types.COMPANIES_REQUEST, companies)]);
