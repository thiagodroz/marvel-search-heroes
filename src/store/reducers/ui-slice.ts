import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store/reducers';

// State
export type UiState = {
  readonly loading: boolean;
};

const getInitialState = (): UiState => ({ loading: false });

// Reducer
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

// Selectors
export const isLoading = ({ uiState }: RootState) => {
  return uiState.loading;
};
