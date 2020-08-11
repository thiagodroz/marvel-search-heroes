import React, { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Loading } from 'components/shared/Loading';
import { Routes } from 'components/Routes';

export const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Suspense fallback={<Loading alwaysVisible />}>
        <Loading />
        <Routes />
      </Suspense>
    </Router>
  );
};
