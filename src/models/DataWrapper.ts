import { DataContainer } from 'models/DataContainer';

export interface DataWrapper<T> {
  readonly code?: number;
  readonly status?: string;
  readonly copyright?: string;
  readonly attributionText?: string;
  readonly attributionHTML?: string;
  readonly data?: DataContainer<T>;
  readonly etag?: string;
}
