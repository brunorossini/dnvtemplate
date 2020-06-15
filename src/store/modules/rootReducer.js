import { combineReducers } from 'redux';

import auth from './auth/duck';
import companies from './companies/duck';

const reducers = combineReducers({
  auth,
  companies,
});

export default reducers;
