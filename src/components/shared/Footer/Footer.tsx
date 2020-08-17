import React from 'react';

import { Container } from 'components/shared/Container';

import Styles from './Footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={Styles.Component}>
    <Container>
      <strong className={Styles.Text}>© 2020 Feito por Thiago Nogueira</strong>
    </Container>
  </footer>
);
