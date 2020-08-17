import React from 'react';

import { FavoriteButton } from 'components/shared/FavoriteButton';
import { Character } from 'models/Character';

import { ReactComponent as MovieIcon } from 'assets/icons/movie.svg';
import { ReactComponent as ComicIcon } from 'assets/icons/comic.svg';
import Styles from './HeroDescription.module.scss';

interface HeroDescriptionProps {
  readonly character: Character;
  readonly children?: never;
}

export const HeroDescription: React.FC<HeroDescriptionProps> = ({
  character,
}) => {
  return (
    <div className={Styles.Component}>
      <span className={Styles.CharacterName}>{character.name}</span>
      <div className={Styles.Title}>
        <h2>{character.name}</h2>
        <FavoriteButton character={character} />
      </div>
      <p className={Styles.CharacterDescription}>{character.description}</p>
      <ul className={Styles.CharacterAppearances}>
        <li>
          <h3 className={Styles.AppearanceTitle}>Quadrinhos</h3>
          <div className={Styles.AppearanceDetails}>
            <ComicIcon />
            <span>{character.comics?.available}</span>
          </div>
        </li>
        <li>
          <h3 className={Styles.AppearanceTitle}>Filmes</h3>
          <div className={Styles.AppearanceDetails}>
            <MovieIcon />
            <span>{character.series?.available}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
