import { ComicSummary } from 'models/ComicSummary';

export interface ComicList {
  readonly available?: number;
  readonly returned?: number;
  readonly collectionURI?: string;
  readonly items?: ComicSummary[];
}
