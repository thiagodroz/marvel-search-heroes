import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AsyncValue } from 'models/AsyncValue';
import { Character } from 'models/Character';
import { RootState } from 'store/reducers';

// State
export type CharactersState = {
  readonly charactersList: AsyncValue<Character[]>;
  readonly favoriteCharacters: Character[];
};

const getInitialState = (): CharactersState => ({
  charactersList: { loading: true },
  favoriteCharacters: [],
});

// Reducer
export const {
  reducer: CharactersReducer,
  actions: CharactersActions,
} = createSlice({
  name: 'charactersState',
  initialState: getInitialState(),
  reducers: {
    resetCharacterList(state, action: PayloadAction<void>) {
      state = getInitialState();
    },
    charactersListSuccess(state, action: PayloadAction<Character[]>) {
      state = {
        ...state,
        charactersList: {
          loading: false,
          success: true,
          value: action.payload,
        },
      };
    },
    charactersListError(state, action: PayloadAction<Error>) {
      state = {
        ...state,
        charactersList: {
          loading: false,
          success: false,
          error: action.payload,
        },
      };
    },
    favoriteCharacter(state, action: PayloadAction<Character>) {
      state = {
        ...state,
        favoriteCharacters: [...state.favoriteCharacters, action.payload],
      };
    },
    unfavoriteCharacter(state, action: PayloadAction<number>) {
      state = {
        ...state,
        favoriteCharacters: state.favoriteCharacters.filter(
          c => c.id !== action.payload,
        ),
      };
    },
  },
});

// Selectors
export const getCharactersList = ({ uiState }: RootState) => {
  return uiState.loading;
};
