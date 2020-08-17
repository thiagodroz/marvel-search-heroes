import React from 'react';
import classNames from 'classnames';

import { Footer } from 'components/shared/Footer';

import Styles from './Layout.module.scss';

interface LayoutProps {
  readonly className?: string;
  readonly children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ className, children }) => (
  <div className={classNames(Styles.Component, className)}>
    <div className={Styles.Content}>{children}</div>
    <Footer />
  </div>
);
