import { httpClient } from 'client';
import { Character } from 'models/Character';
import { Comic } from 'models/Comic';
import { DataWrapper } from 'models/DataWrapper';
import { urlBuilder } from 'utils/url-builder';

interface GetCharactersRequest {
  readonly nameStartsWith?: string;
  readonly offset?: number;
}

export const getCharacters = ({
  offset,
  nameStartsWith,
}: GetCharactersRequest) => {
  const url = urlBuilder('/characters', {
    limit: 20,
    offset,
    nameStartsWith,
  });

  return httpClient.get<DataWrapper<Character>>(url);
};

export const getCharacterDetails = (id: string | number) =>
  httpClient.get<DataWrapper<Character>>(`/characters/${id}`);

export const getCharacterLastComics = (id: string | number) => {
  const url = urlBuilder(`/characters/${id}/comics`, {
    limit: 10,
    orderBy: '-onsaleDate',
  });

  return httpClient.get<DataWrapper<Comic>>(url);
};
