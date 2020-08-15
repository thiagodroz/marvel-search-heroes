import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Character } from 'models/Character';
import {
  CharactersActions,
  getFavoriteCharacters,
} from 'store/reducers/characters-slice';

export const useFavoriteButton = (character: Character) => {
  const favoriteCharacters = useSelector(getFavoriteCharacters);
  const dispatch = useDispatch();

  const isFavorite = favoriteCharacters.some(c => c.id === character.id);

  const handleFavoriteCharacter = useCallback(() => {
    if (isFavorite) {
      if (character.id !== undefined)
        dispatch(CharactersActions.unfavoriteCharacter(character.id));
    } else {
      dispatch(CharactersActions.favoriteCharacterSaga(character));
    }
  }, [dispatch, character, isFavorite]);

  return {
    handleFavoriteCharacter,
    isFavorite,
  };
};
