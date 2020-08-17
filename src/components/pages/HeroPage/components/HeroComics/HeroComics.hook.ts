import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  CharactersActions,
  getCharacterComics,
} from 'store/reducers/characters-slice';

export const useHeroComics = () => {
  const { id } = useParams<{ id: string }>();
  const comics = useSelector(getCharacterComics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CharactersActions.fetchCharacterComicsSaga(id));
  }, [id, dispatch]);

  return {
    comics,
  };
};
