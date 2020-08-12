import { combineReducers } from '@reduxjs/toolkit';

import { UiReducer } from './ui-slice';

export const RootReducer = combineReducers({
  uiState: UiReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
