import React from 'react';

import { Footer } from 'components/pages/HomePage/components/Footer';

import Styles from './Layout.module.scss';

interface LayoutProps {
  readonly children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={Styles.Component}>
    <div className={Styles.Content}>{children}</div>
    <Footer />
  </div>
);
