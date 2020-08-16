import React from 'react';

import { Container } from 'components/shared/Container';
import { Layout } from 'components/shared/Layout';

import { CharactersList } from './components/CharactersList';
import { Header } from './components/Header';

export const HomePage: React.FC = () => (
  <Layout>
    <Container>
      <Header />
      <CharactersList />
    </Container>
  </Layout>
);
