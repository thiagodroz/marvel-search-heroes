import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AsyncValue } from 'models/AsyncValue';
import { Character } from 'models/Character';
import { CharacterDataContainer } from 'models/CharacterDataContainer';
import { RootState } from 'store/reducers';

// State
export type CharactersState = {
  readonly charactersList: AsyncValue<CharacterDataContainer>;
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
      return {
        ...state,
        charactersList: getInitialState().charactersList,
      };
    },
    charactersListSuccess(
      state,
      action: PayloadAction<CharacterDataContainer>,
    ) {
      return {
        ...state,
        charactersList: {
          loading: false,
          success: true,
          value: action.payload,
        },
      };
    },
    charactersListError(state, action: PayloadAction<Error>) {
      return {
        ...state,
        charactersList: {
          loading: false,
          success: false,
          error: action.payload,
        },
      };
    },
    favoriteCharacter(state, action: PayloadAction<Character>) {
      return {
        ...state,
        favoriteCharacters: [...state.favoriteCharacters, action.payload],
      };
    },
    unfavoriteCharacter(state, action: PayloadAction<number>) {
      return {
        ...state,
        favoriteCharacters: state.favoriteCharacters.filter(
          c => c.id !== action.payload,
        ),
      };
    },
    fetchCharactersListSaga(state, action: PayloadAction<void>) {},
    favoriteCharacterSaga(state, action: PayloadAction<Character>) {},
  },
});

// Selectors
export const getCharactersList = ({ charactersState }: RootState) =>
  charactersState.charactersList;

export const getFavoriteCharacters = ({ charactersState }: RootState) =>
  charactersState.favoriteCharacters;

// Action Types
export type FavoriteCharacterSagaAction = ReturnType<
  typeof CharactersActions.favoriteCharacterSaga
>;
