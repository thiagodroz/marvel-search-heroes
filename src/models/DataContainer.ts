export interface DataContainer<T> {
  readonly offset?: number;
  readonly limit?: number;
  readonly total?: number;
  readonly count?: number;
  readonly results?: T[];
}
