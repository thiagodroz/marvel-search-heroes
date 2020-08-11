import React, { Suspense } from 'react';
import { Routes } from './Routes';

export const App = () => (
  <Suspense fallback={'Carregando...'}>
    <Routes />
  </Suspense>
);
