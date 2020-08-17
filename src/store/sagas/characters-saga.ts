import { put, call, select } from 'typed-redux-saga';

import {
  getCharacterDetails,
  getCharacterLastComics,
  getCharacters,
} from 'client/characters';
import {
  CharactersActions,
  getFavoriteCharacters,
  FavoriteCharacterSagaAction,
  FetchCharactersListSagaAction,
  FetchCharacterDetailsSagaAction,
  FetchCharactersComicsSagaAction,
} from 'store/reducers/characters-slice';
import { UiActions } from 'store/reducers/ui-slice';

export function* fetchCharactersSaga({
  payload,
}: FetchCharactersListSagaAction) {
  yield put(UiActions.showLoading());
  yield put(CharactersActions.resetCharacterList());

  try {
    const { data } = yield* call(getCharacters, {
      nameStartsWith: payload || undefined,
    });

    if (data.code === 200 && data.data) {
      yield put(CharactersActions.charactersListSuccess(data.data));
    } else {
      yield put(
        CharactersActions.charactersListError(
          new Error('Invalid API response'),
        ),
      );
    }
  } catch (e) {
    yield put(CharactersActions.charactersListError(e));
  } finally {
    yield put(UiActions.hideLoading());
  }
}

export function* fetchCharacterComicsSaga({
  payload,
}: FetchCharactersComicsSagaAction) {
  yield put(UiActions.showLoading());
  yield put(CharactersActions.resetCharacterComics());

  try {
    const { data } = yield* call(getCharacterLastComics, payload);

    if (data.code === 200 && data.data) {
      yield put(CharactersActions.characterComicsSuccess(data.data));
    } else {
      yield put(
        CharactersActions.characterComicsError(
          new Error('Invalid API response'),
        ),
      );
    }
  } catch (e) {
    yield put(CharactersActions.characterComicsError(e));
  } finally {
    yield put(UiActions.hideLoading());
  }
}

export function* fetchCharacterDetailsSaga({
  payload,
}: FetchCharacterDetailsSagaAction) {
  yield put(UiActions.showLoading());
  yield put(CharactersActions.resetCharacterDetails());

  try {
    const { data } = yield* call(getCharacterDetails, payload);

    if (data.code === 200 && data.data && data.data.results) {
      yield put(
        CharactersActions.characterDetailsSuccess(data.data.results[0]),
      );
    } else {
      yield put(
        CharactersActions.characterDetailsError(
          new Error('Invalid API response'),
        ),
      );
    }
  } catch (e) {
    yield put(CharactersActions.characterDetailsError(e));
  } finally {
    yield put(UiActions.hideLoading());
  }
}

export function* favoriteCharacterSaga({
  payload,
}: FavoriteCharacterSagaAction) {
  const favorites = yield* select(getFavoriteCharacters);

  if (
    payload.id === undefined ||
    favorites.some(c => c.id === payload.id) ||
    favorites.length >= 5
  )
    return;

  yield put(CharactersActions.favoriteCharacter(payload));
}
