import React from 'react';

import { useHeroDetails } from './HeroDetails.hook';
import { HeroDescription } from '../HeroDescription';

import HeroImagePlaceholder from 'assets/hero-image-placeholder.jpg';
import Styles from './HeroDetails.module.scss';

interface HeroDetailsProps {
  readonly children?: never;
}

export const HeroDetails: React.FC<HeroDetailsProps> = () => {
  const { heroDetails } = useHeroDetails();

  if (heroDetails.loading)
    return <div className={Styles.Loading}>Carregando...</div>;

  if (!heroDetails.success)
    return (
      <div className={Styles.Error}>
        Tivemos um problema ao tentar obter os dados deste personagem.
      </div>
    );

  const character = heroDetails.value;

  return (
    <section className={Styles.Component}>
      <HeroDescription character={character} />
      <figure className={Styles.HeroImage}>
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
    </section>
  );
};
