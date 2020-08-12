import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store/reducers';
import { UiState } from './ui-state';

const getInitialState = (): UiState => ({ loading: false });

export const { reducer: UiReducer, actions: UiActions } = createSlice({
  name: 'uiState',
  initialState: getInitialState(),
  reducers: {
    showLoading(state, action: PayloadAction<void>) {
      state.loading = true;
    },
    hideLoading(state, action: PayloadAction<void>) {
      state.loading = false;
    },
  },
});

export const isLoading = ({ uiState }: RootState) => {
  return uiState.loading;
};
