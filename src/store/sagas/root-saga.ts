import { all, takeLatest } from 'typed-redux-saga';

import { CharactersActions } from 'store/reducers/characters-slice';
import {
  favoriteCharacterSaga,
  fetchCharactersSaga,
} from 'store/sagas/characters-saga';

export function* rootSaga() {
  yield all([
    takeLatest(CharactersActions.fetchCharactersListSaga, fetchCharactersSaga),
    takeLatest(CharactersActions.favoriteCharacterSaga, favoriteCharacterSaga),
  ]);
}
