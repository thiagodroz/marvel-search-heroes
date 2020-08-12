import { SeriesSummary } from 'models/SeriesSummary';

export interface SeriesList {
  readonly available?: number;
  readonly returned?: number;
  readonly collectionURI?: string;
  readonly items?: SeriesSummary[];
}
