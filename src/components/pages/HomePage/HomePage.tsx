import React from 'react';

import { Container } from 'components/shared/Container';

import { CharactersList } from './components/CharactersList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const HomePage: React.FC = () => (
  <>
    <Container>
      <Header />
      <CharactersList />
    </Container>
    <Footer />
  </>
);
