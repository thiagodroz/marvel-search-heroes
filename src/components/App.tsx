import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Router } from 'react-router-dom';

import { Loading } from 'components/shared/Loading';
import { Routes } from 'components/Routes';
import { persistor, store, history } from 'store';
import { ConnectedRouter } from 'connected-react-router';

export const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Suspense fallback={<Loading alwaysVisible />}>
            <Loading />
            <Routes />
          </Suspense>
        </Router>
      </PersistGate>
    </ConnectedRouter>
  </Provider>
);
