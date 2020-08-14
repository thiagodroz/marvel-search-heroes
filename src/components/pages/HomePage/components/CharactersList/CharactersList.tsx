import React from 'react';

import { useCharactersList } from './CharactersList.hook';

import LoadingSvg from 'assets/loading.svg';
import Styles from './CharactersList.module.scss';

export const CharactersList: React.FC = () => {
  const { charactersList, tryAgain } = useCharactersList();

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

  return <section className={Styles.Component}>Carregado</section>;
};
