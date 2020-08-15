import React from 'react';

import { Character } from 'models/Character';
import { useFavoriteButton } from './FavoriteButton.hook';

import { ReactComponent as HeartFilledIcon } from 'assets/icons/heart-filled.svg';
import { ReactComponent as HeartOutlineIcon } from 'assets/icons/heart-outline.svg';
import Styles from './FavoriteButton.module.scss';

interface FavoriteButtonProps {
  readonly character: Character;
  readonly children?: never;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  character,
}) => {
  const { isFavorite, handleFavoriteCharacter } = useFavoriteButton(character);

  return (
    <button
      type="button"
      className={Styles.Component}
      onClick={handleFavoriteCharacter}
    >
      {isFavorite ? <HeartFilledIcon /> : <HeartOutlineIcon />}
    </button>
  );
};
