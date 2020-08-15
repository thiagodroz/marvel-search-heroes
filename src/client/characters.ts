import { httpClient } from 'client';
import { CharacterDataWrapper } from 'models/CharacterDataWrapper';
import { urlBuilder } from 'utils/url-builder';

interface GetCharactersRequest {
  readonly offset?: number;
}

export const getCharacters = ({ offset }: GetCharactersRequest) => {
  const url = urlBuilder('/characters', {
    limit: 20,
    offset,
  });

  return httpClient.get<CharacterDataWrapper>(url);
};
