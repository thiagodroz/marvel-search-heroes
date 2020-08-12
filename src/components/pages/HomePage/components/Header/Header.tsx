import React from 'react';

import { SearchField } from 'components/shared/SearchField';

import { ReactComponent as Logo } from 'assets/logo.svg';
import Styles from './Header.module.scss';

export const Header: React.FC = () => (
  <header className={Styles.Component}>
    <Logo />
    <h1 className={Styles.Title}>Explore o Universo</h1>
    <p className={Styles.Subtitle}>
      Mergulhe no dom&iacute;nio deslumbrante de todos os personagens
      cl&aacute;ssicos que voc&ecirc; ama - e aqueles que voc&ecirc;
      descobrir&aacute; em breve!
    </p>
    <SearchField />
  </header>
);
