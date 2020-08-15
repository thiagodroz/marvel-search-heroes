import React, { useState } from 'react';

import { Switch } from 'components/shared/Switch';
import { useCharactersList } from './CharactersList.hook';

import HeroIcon from 'assets/icons/hero.svg';
import HeartIcon from 'assets/icons/heart-filled.svg';
import Styles from './CharactersList.module.scss';

enum CharactersListMode {
  FetchedHeroes = 'fetched-heroes',
  FavoriteHeroes = 'favorite-heroes',
}

export const CharactersList: React.FC = () => {
  const [mode, setMode] = useState<CharactersListMode>(
    CharactersListMode.FetchedHeroes,
  );
  const { charactersList, favoriteCharacters, tryAgain } = useCharactersList();

  if (charactersList.loading)
    return (
      <section className={Styles.Loading}>
        Carregando Lista de heróis...
      </section>
    );

  if (!charactersList.success)
    return (
      <section className={Styles.ErrorMessage}>
        <h3 className={Styles.ErrorTitle}>
          Ops... Tivemos um problema ao tentar carregar a lista de
          her&oacute;is. Por favor tente novamente.
        </h3>
        <button className={Styles.ErrorButton} onClick={tryAgain}>
          Tentar novamente
        </button>
      </section>
    );

  const { total, results } = charactersList.value;

  return (
    <section className={Styles.Component}>
      <header className={Styles.HeroesListHeader}>
        <div className={Styles.HeroesCount}>
          Encontrados{' '}
          {mode === CharactersListMode.FetchedHeroes
            ? total
            : favoriteCharacters.length}{' '}
          her&oacute;is
        </div>
        <div className={Styles.HeroesOrder}>
          <HeroIcon />
          <span>Ordenar por nome - A/Z</span>
          <Switch
            valueOn={CharactersListMode.FavoriteHeroes}
            valueOff={CharactersListMode.FavoriteHeroes}
            onChange={setMode}
            initialValue="off"
          />
          <HeartIcon />
          <span>Somente favoritos</span>
        </div>
      </header>
      <div className={Styles.HeroesListBody}>{results?.map(c => c.name)}</div>
    </section>
  );
};
