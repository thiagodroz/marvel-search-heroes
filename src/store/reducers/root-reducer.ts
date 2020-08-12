import { combineReducers } from '@reduxjs/toolkit';

import { CharactersReducer } from './characters-slice';
import { UiReducer } from './ui-slice';

export const RootReducer = combineReducers({
  charactersState: CharactersReducer,
  uiState: UiReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
