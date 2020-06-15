import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import companies from './companies/sagas';

export default function* rootSaga() {
  return yield all([auth, companies]);
}
