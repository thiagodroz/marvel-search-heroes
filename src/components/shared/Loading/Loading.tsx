import React from 'react';

import { useLoading } from './Loading.hook';

import LoadingSvg from 'assets/loading.svg';
import Styles from './Loading.module.scss';

interface LoadingProps {
  readonly alwaysVisible?: boolean;
  readonly children?: never;
}

export const Loading: React.FC<LoadingProps> = ({ alwaysVisible = false }) => {
  const { loading } = useLoading();

  if (!alwaysVisible && !loading) return null;

  return (
    <div className={Styles.Component}>
      <img src={LoadingSvg} alt="Carregando..." />
    </div>
  );
};
