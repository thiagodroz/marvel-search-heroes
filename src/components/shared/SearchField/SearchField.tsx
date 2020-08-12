import React, { useCallback, KeyboardEvent } from 'react';

import { useSearchField } from './SearchField.hook';

import SearchIcon from 'assets/icons/search.svg';
import Styles from './SearchField.module.scss';

export const SearchField: React.FC = () => {
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
    <div className={Styles.Component}>
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
