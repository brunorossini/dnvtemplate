import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  companiesRequest: [],
  companiesSuccess: ['companies'],
  companiesFailure: [],
});

const INITIAL_STATE = {
  companies: null,
  loading: false,
  error: null,
};

const companiesRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const companiesSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  companies: action.payload.companies,
  loading: false,
});

const companiesFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: action.payload.error,
});

export default createReducer(INITIAL_STATE, {
  [Types.COMPANIES_REQUEST]: companiesRequest,
  [Types.COMPANIES_SUCCESS]: companiesSuccess,
  [Types.COMPANIES_FAILURE]: companiesFailure,
});
