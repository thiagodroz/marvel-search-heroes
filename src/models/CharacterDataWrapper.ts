import { CharacterDataContainer } from 'models/CharacterDataContainer';

export interface CharacterDataWrapper {
  readonly code?: number;
  readonly status?: string;
  readonly copyright?: string;
  readonly attributionText?: string;
  readonly attributionHTML?: string;
  readonly data?: CharacterDataContainer;
  readonly etag?: string;
}
