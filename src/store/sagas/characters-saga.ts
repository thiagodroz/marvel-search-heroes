import { put, call, select } from 'typed-redux-saga';

import { getCharacters } from 'client/characters';
import {
  CharactersActions,
  getFavoriteCharacters,
  FavoriteCharacterSagaAction,
} from 'store/reducers/characters-slice';
import { UiActions } from 'store/reducers/ui-slice';

export function* fetchCharactersSaga() {
  yield put(UiActions.showLoading());
  yield put(CharactersActions.resetCharacterList());

  try {
    const result = yield* call(getCharacters, {});

    if (result.code === 200 && result.data?.results) {
      yield put(CharactersActions.charactersListSuccess(result.data?.results));
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