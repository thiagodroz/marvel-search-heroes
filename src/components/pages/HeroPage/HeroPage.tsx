import React from 'react';

import { Container } from 'components/shared/Container';
import { Layout } from 'components/shared/Layout';

import Styles from './HeroPage.module.scss';
import { Header } from './components/Header';

export const HeroPage: React.FC = () => (
  <Layout className={Styles.Component}>
    <Header />
    <Container>Pokemon</Container>
  </Layout>
);
