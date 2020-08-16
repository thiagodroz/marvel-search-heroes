import React from 'react';

import { SearchField } from 'components/shared/SearchField';

import Logo from 'assets/logo.png';
import Styles from './Header.module.scss';

export const Header: React.FC = () => (
  <header className={Styles.Component}>
    <img src={Logo} alt="Marvel Search Heroes" />
    <h1 className={Styles.Title}>Explore o Universo</h1>
    <p className={Styles.Subtitle}>
      Mergulhe no dom&iacute;nio deslumbrante de todos os personagens
      cl&aacute;ssicos que voc&ecirc; ama - e aqueles que voc&ecirc;
      descobrir&aacute; em breve!
    </p>
    <SearchField />
  </header>
);
