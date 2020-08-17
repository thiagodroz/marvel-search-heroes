import { call } from 'typed-redux-saga';
import { expectSaga } from 'redux-saga-test-plan';

import { getCharacters } from 'client/characters';
import { CharactersActions } from 'store/reducers/characters-slice';
import { UiActions } from 'store/reducers/ui-slice';
import { charactersWrapper } from 'test/testing-variables';
import { fetchCharactersSaga } from './characters-saga';

describe('CharactersSaga spec', () => {
  describe('fetchCharactersSaga', () => {
    it('should put the success action if the api call is successfully', () => {
      const query = 'hulk';
      const action = CharactersActions.fetchCharactersListSaga(query);

      return expectSaga(fetchCharactersSaga, action)
        .provide([
          [call(getCharacters, { nameStartsWith: query }, charactersWrapper)],
        ])
        .put(UiActions.showLoading())
        .put(CharactersActions.resetCharacterList())
        .call(getCharacters, { nameStartsWith: query })
        .put(UiActions.hideLoading())
        .run();
    });
  });
});
