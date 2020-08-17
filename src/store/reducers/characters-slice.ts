import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AsyncValue } from 'models/AsyncValue';
import { Character } from 'models/Character';
import { Comic } from 'models/Comic';
import { DataContainer } from 'models/DataContainer';
import { RootState } from 'store';

// State
export type CharactersState = {
  readonly charactersList: AsyncValue<DataContainer<Character>>;
  readonly characterComics: AsyncValue<DataContainer<Comic>>;
  readonly characterDetails: AsyncValue<Character>;
  readonly favoriteCharacters: Character[];
};

const getInitialState = (): CharactersState => ({
  characterComics: { loading: true },
  charactersList: { loading: true },
  characterDetails: { loading: true },
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
      action: PayloadAction<DataContainer<Character>>,
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
    resetCharacterDetails(state, action: PayloadAction<void>) {
      return {
        ...state,
        characterDetails: getInitialState().characterDetails,
      };
    },
    characterDetailsSuccess(state, action: PayloadAction<Character>) {
      return {
        ...state,
        characterDetails: {
          loading: false,
          success: true,
          value: action.payload,
        },
      };
    },
    characterDetailsError(state, action: PayloadAction<Error>) {
      return {
        ...state,
        characterDetails: {
          loading: false,
          success: false,
          error: action.payload,
        },
      };
    },
    resetCharacterComics(state, action: PayloadAction<void>) {
      return {
        ...state,
        characterComics: getInitialState().characterComics,
      };
    },
    characterComicsSuccess(state, action: PayloadAction<DataContainer<Comic>>) {
      return {
        ...state,
        characterComics: {
          loading: false,
          success: true,
          value: action.payload,
        },
      };
    },
    characterComicsError(state, action: PayloadAction<Error>) {
      return {
        ...state,
        characterComics: {
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
    fetchCharactersListSaga(state, action: PayloadAction<string | null>) {},
    fetchCharacterComicsSaga(state, action: PayloadAction<string | number>) {},
    fetchCharacterDetailsSaga(state, action: PayloadAction<string | number>) {},
    favoriteCharacterSaga(state, action: PayloadAction<Character>) {},
  },
});

// Selectors
export const getCharactersList = ({ charactersState }: RootState) =>
  charactersState.charactersList;

export const getCharacterComics = ({ charactersState }: RootState) =>
  charactersState.characterComics;

export const getCharacterDetails = ({ charactersState }: RootState) =>
  charactersState.characterDetails;

export const getFavoriteCharacters = ({ charactersState }: RootState) =>
  charactersState.favoriteCharacters;

// Action Types
export type FetchCharactersListSagaAction = ReturnType<
  typeof CharactersActions.fetchCharactersListSaga
>;

export type FetchCharactersComicsSagaAction = ReturnType<
  typeof CharactersActions.fetchCharacterComicsSaga
>;

export type FetchCharacterDetailsSagaAction = ReturnType<
  typeof CharactersActions.fetchCharacterDetailsSaga
>;

export type FavoriteCharacterSagaAction = ReturnType<
  typeof CharactersActions.favoriteCharacterSaga
>;
