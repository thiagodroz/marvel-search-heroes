import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  CharactersActions,
  getCharactersList,
  getFavoriteCharacters,
} from 'store/reducers/characters-slice';

export const useCharactersList = () => {
  const listContainer = useSelector(getCharactersList);
  const favoriteCharacters = useSelector(getFavoriteCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CharactersActions.fetchCharactersListSaga());
  }, [dispatch]);

  const tryAgain = useCallback(() => {
    dispatch(CharactersActions.fetchCharactersListSaga());
  }, [dispatch]);

  return {
    charactersList: listContainer,
    favoriteCharacters,
    tryAgain,
  };
};
