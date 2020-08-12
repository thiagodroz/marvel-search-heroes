import React from 'react';

import { ReactComponent as Logo } from 'assets/logo.svg';
import Styles from './Header.module.scss';

export const Header: React.FC = () => (
  <header className={Styles.Component}>
    <Logo />
    <h1 className={Styles.Title}>Explore o Universo</h1>
    <p className={Styles.Subtitle}>
      Mergulhe no domínio deslumbrante de todos os personagens clássicos que
      você ama - e aqueles que você descobrirá em breve!
    </p>
  </header>
);
