import { Character } from 'models/Character';

export interface CharacterDataContainer {
  readonly offset?: number;
  readonly limit?: number;
  readonly total?: number;
  readonly count?: number;
  readonly results?: Character[];
}
