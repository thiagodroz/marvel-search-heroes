import React from 'react';

import { useHeroComics } from './HeroComics.hook';

import Styles from './HeroComics.module.scss';

interface HeroComicsProps {
  readonly children?: never;
}

export const HeroComics: React.FC<HeroComicsProps> = () => {
  const { comics } = useHeroComics();

  if (comics.loading)
    return (
      <div className={Styles.Loading}>Carregando lan&ccedil;amentos...</div>
    );

  if (!comics.success || !comics.value.results)
    return (
      <div className={Styles.Error}>
        Tivemos um problema ao obter os quadrinhos deste personagem.
      </div>
    );

  return (
    <div className={Styles.Component}>
      <h2 className={Styles.Title}>&Uacute;ltimos lan&ccedil;amentos</h2>
      <ul className={Styles.ComicsList}>
        {comics.value.results.map(c => (
          <li>
            <img
              src={`${c.thumbnail?.path}.${c.thumbnail?.extension}`}
              alt={c.title}
            />
            <span>{c.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
