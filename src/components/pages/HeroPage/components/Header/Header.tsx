import React from 'react';
import { Link } from 'react-router-dom';

import { SearchField } from 'components/shared/SearchField';

import Logo from 'assets/logo.png';
import Styles from './Header.module.scss';

export const Header: React.FC = () => (
  <header className={Styles.Component}>
    <Link className={Styles.Logo} to="/">
      <img src={Logo} alt="Marvel Search Heroes" />
    </Link>
    <SearchField secondary />
  </header>
);
