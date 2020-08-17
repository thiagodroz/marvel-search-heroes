import { all, takeLatest } from 'typed-redux-saga';

import { CharactersActions } from 'store/reducers/characters-slice';
import {
  favoriteCharacterSaga,
  fetchCharactersSaga,
  fetchCharacterDetailsSaga,
  fetchCharacterComicsSaga,
} from 'store/sagas/characters-saga';

export function* rootSaga() {
  yield all([
    takeLatest(CharactersActions.fetchCharactersListSaga, fetchCharactersSaga),
    takeLatest(
      CharactersActions.fetchCharacterComicsSaga,
      fetchCharacterComicsSaga,
    ),
    takeLatest(
      CharactersActions.fetchCharacterDetailsSaga,
      fetchCharacterDetailsSaga,
    ),
    takeLatest(CharactersActions.favoriteCharacterSaga, favoriteCharacterSaga),
  ]);
}
