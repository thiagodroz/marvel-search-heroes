import React, { useCallback, KeyboardEvent } from 'react';
import classNames from 'classnames';

import { useSearchField } from './SearchField.hook';

import SearchIcon from 'assets/icons/search.svg';
import Styles from './SearchField.module.scss';

interface SearchFieldProps {
  readonly secondary?: boolean;
  readonly children?: never;
}

export const SearchField: React.FC<SearchFieldProps> = ({
  secondary = false,
}) => {
  const { onChange, onSearch, value } = useSearchField();

  const onKeyPress = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onSearch();
      }
    },
    [onSearch],
  );

  return (
    <div
      className={classNames(Styles.Component, {
        [Styles.Secondary]: secondary,
      })}
    >
      <button type="button" className={Styles.Button} onClick={onSearch}>
        <img src={SearchIcon} alt="Buscar" />
      </button>
      <input
        className={Styles.Input}
        type="text"
        value={value}
        onChange={onChange}
        onKeyUp={onKeyPress}
        placeholder="Procure por heróis"
      />
    </div>
  );
};
