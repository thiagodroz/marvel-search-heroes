import { httpClient } from 'client';
import { CharacterDataWrapper } from 'models/CharacterDataWrapper';
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

  return httpClient.get<CharacterDataWrapper>(url);
};
