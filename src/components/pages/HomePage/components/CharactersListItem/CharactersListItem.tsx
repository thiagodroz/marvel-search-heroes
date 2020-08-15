import React from 'react';

import { FavoriteButton } from 'components/shared/FavoriteButton';
import { Character } from 'models/Character';

import HeroImagePlaceholder from 'assets/hero-image-placeholder.jpg';
import Styles from './CharactersListItem.module.scss';

interface ChatactersListItemProps {
  readonly character: Character;
  readonly children?: never;
}

export const CharactersListItem: React.FC<ChatactersListItemProps> = ({
  character,
}) => {
  return (
    <div className={Styles.Component}>
      <figure className={Styles.Thumbnail}>
        {character.thumbnail &&
        character.thumbnail.path &&
        character.thumbnail.extension ? (
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
        ) : (
          <img
            src={HeroImagePlaceholder}
            alt="Imagem do herói não encontrada"
          />
        )}
      </figure>
      <div className={Styles.Title}>
        <span className={Styles.HeroName}>{character.name}</span>
        <FavoriteButton character={character} />
      </div>
    </div>
  );
};
