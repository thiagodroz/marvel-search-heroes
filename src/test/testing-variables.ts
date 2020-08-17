import { RootState } from 'store';
import { getInitialState as getCharactersInitialState } from 'store/reducers/characters-slice';
import { getInitialState as getUiInitialState } from 'store/reducers/ui-slice';

export const storeInitialState: RootState = {
  charactersState: getCharactersInitialState(),
  uiState: getUiInitialState(),
  router: {
    action: 'POP',
    location: {
      pathname: '/',
      search: '',
      hash: '',
      state: {},
    },
  },
};
