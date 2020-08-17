import React from 'react';

import { Container } from 'components/shared/Container';
import { Layout } from 'components/shared/Layout';
import { Header } from './components/Header';
import { HeroComics } from './components/HeroComics';
import { HeroDetails } from './components/HeroDetails';

import Styles from './HeroPage.module.scss';

export const HeroPage: React.FC = () => (
  <Layout className={Styles.Component}>
    <Header />
    <Container>
      <HeroDetails />
      <HeroComics />
    </Container>
  </Layout>
);
