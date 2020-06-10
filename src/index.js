import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import { store, persistor } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#3f5a60" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
