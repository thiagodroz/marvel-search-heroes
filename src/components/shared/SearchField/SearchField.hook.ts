import { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { push } from 'connected-react-router';

interface SearchFieldHookResult {
  readonly onSearch: () => void;
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  readonly value: string;
}

export const useSearchField = (): SearchFieldHookResult => {
  const { search } = useLocation();
  const [value, setValue] = useState(
    new URLSearchParams(search).get('query') || '',
  );
  const dispatch = useDispatch();

  const onSearch = useCallback(() => {
    dispatch(push(`/?query=${encodeURIComponent(value)}`));
  }, [dispatch, value]);

  return {
    onSearch,
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    value,
  };
};
