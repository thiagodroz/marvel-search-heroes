import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { CharactersReducer } from './characters-slice';
import { UiReducer } from './ui-slice';

export const createRootReducer = (history: History) =>
  combineReducers({
    charactersState: CharactersReducer,
    uiState: UiReducer,
    router: connectRouter(history),
  });
