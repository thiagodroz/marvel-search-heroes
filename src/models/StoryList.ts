import { StorySummary } from 'models/StorySummary';

export interface StoryList {
  readonly available?: number;
  readonly returned?: number;
  readonly collectionURI?: string;
  readonly items?: StorySummary[];
}
