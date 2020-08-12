import { useSelector } from 'react-redux';

import { isLoading } from 'store/reducers/ui-slice';

interface LoadingHookResult {
  readonly loading: boolean;
}

export const useLoading = (): LoadingHookResult => {
  const loading = useSelector(isLoading);

  return { loading };
};
