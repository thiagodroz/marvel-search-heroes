import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  CharactersActions,
  getCharacterDetails,
} from 'store/reducers/characters-slice';

export const useHeroDetails = () => {
  const { id } = useParams<{ id: string }>();
  const characterDetails = useSelector(getCharacterDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CharactersActions.fetchCharacterDetailsSaga(id));
  }, [id, dispatch]);

  return {
    heroDetails: characterDetails,
  };
};
