import { Character } from 'models/Character';
import { Comic } from 'models/Comic';
import { DataContainer } from 'models/DataContainer';
import { DataWrapper } from 'models/DataWrapper';
import { RootState } from 'store';
import { getInitialState as getCharactersInitialState } from 'store/reducers/characters-slice';
import { getInitialState as getUiInitialState } from 'store/reducers/ui-slice';

export const storeInitialState: RootState = {
  charactersState: getCharactersInitialState(),
  uiState: getUiInitialState(),
  router: {
    action: 'POP',
    location: {
      pathname: '/',
      search: '',
      hash: '',
      state: {},
    },
  },
};

// Characters
export const characters: Character[] = [
  {
    id: 123,
    description: 'The incredible Hulk',
    name: 'Hulk',
    thumbnail: {
      extension: 'jpg',
      path: '/image',
    },
  },
  {
    id: 42,
    description: 'Just anyone',
    name: 'John Doe',
    thumbnail: {
      extension: 'png',
      path: '/foo',
    },
  },
];

export const charactersContainer: DataContainer<Character> = {
  count: 2,
  limit: 20,
  offset: 0,
  results: characters,
  total: 2,
};

export const charactersWrapper: DataWrapper<Character> = {
  code: 200,
  status: 'Ok',
  data: charactersContainer,
};

export const comics: Comic[] = [
  {
    id: 9203,
    thumbnail: {
      extension: 'png',
      path: '/bar',
    },
    title: 'My Comic',
  },
];

export const comicsContainer: DataContainer<Comic> = {
  count: 1,
  limit: 10,
  offset: 0,
  results: comics,
  total: 1,
};

export const comicsWrapper: DataWrapper<Comic> = {
  code: 200,
  status: 'Ok',
  data: comicsContainer,
};
