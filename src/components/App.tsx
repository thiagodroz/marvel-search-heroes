import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Loading } from 'components/shared/Loading';
import { Routes } from 'components/Routes';
import { store, persistor } from 'store';

export const App = () => {
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Suspense fallback={<Loading alwaysVisible />}>
            <Loading />
            <Routes />
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
};
