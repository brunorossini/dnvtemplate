import { combineReducers } from 'redux';

import auth from './auth/duck';

const reducers = combineReducers({
  auth,
});

export default reducers;
