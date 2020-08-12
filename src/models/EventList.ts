import { EventSummary } from 'models/EventSummary';

export interface EventList {
  readonly available?: number;
  readonly returned?: number;
  readonly collectionURI?: string;
  readonly items?: EventSummary[];
}
