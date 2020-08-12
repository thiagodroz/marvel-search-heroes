import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import {} from 'store/reducers/characters-slice';

interface SearchFieldHookResult {
  readonly onSearch: () => void;
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  readonly value: string;
}

export const useSearchField = (): SearchFieldHookResult => {
  return {
    onSearch: () => {},
    onChange: (event: ChangeEvent<HTMLInputElement>) => {},
    value: '',
  };
};
