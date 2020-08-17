import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import { createMemoryHistory } from 'history';

import { AppStore, RootState } from 'store';
import { createRootReducer } from 'store/reducers';
import { storeInitialState } from 'test/testing-variables';

const history = createMemoryHistory();

interface StoreConfig {
  readonly initialState?: RootState;
  readonly store?: AppStore;
}

function render(
  ui: React.ReactNode,
  {
    initialState = storeInitialState,
    store = createStore(createRootReducer(history), initialState),
  }: StoreConfig | undefined = {},
) {
  return {
    ...rtlRender(<ReduxProvider store={store}>{ui}</ReduxProvider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}

export * from '@testing-library/react';
// override the built-in render with our own
export { render };
