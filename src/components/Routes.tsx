import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('components/pages/HomePage'));
const HeroPage = lazy(() => import('components/pages/HeroPage'));
const NotFoundPage = lazy(() => import('components/pages/NotFoundPage'));

export const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/hero/:id" exact component={HeroPage} />
    <Route>
      <NotFoundPage />
    </Route>
  </Switch>
);
