import React from 'react';

import { Container } from 'components/shared/Container';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const HomePage: React.FC = () => (
  <>
    <Container>
      <Header />
      <section></section>
    </Container>
    <Footer />
  </>
);
