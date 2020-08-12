import React from 'react';

import Styles from './Container.module.scss';

interface ContainerProps {
  readonly children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className={Styles.Component}>{children}</div>
);
