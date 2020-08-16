import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  CharactersActions,
  getCharactersList,
  getFavoriteCharacters,
} from 'store/reducers/characters-slice';

export const useCharactersList = () => {
  const listContainer = useSelector(getCharactersList);
  const favoriteCharacters = useSelector(getFavoriteCharacters);
  const location = useLocation();
  const dispatch = useDispatch();

  const query = new URLSearchParams(location.search).get('query');

  const fetchCharacters = useCallback(() => {
    dispatch(CharactersActions.fetchCharactersListSaga(query));
  }, [dispatch, query]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return {
    charactersList: listContainer,
    favoriteCharacters,
    tryAgain: fetchCharacters,
  };
};
