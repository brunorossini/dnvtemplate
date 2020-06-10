import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: '@rastreador',
      storage: AsyncStorage,
      whitelist: ['auth'],
      transforms: [createBlacklistFilter('auth', ['loading', 'error'])],
    },
    reducers
  );

  return persistedReducer;
};
