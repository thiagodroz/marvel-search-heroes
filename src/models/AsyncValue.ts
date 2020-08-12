interface LoadingValue {
  readonly loading: true;
}

interface SuccessValue<T> {
  readonly loading: false;
  readonly success: true;
  readonly value: T;
}

interface ErrorValue {
  readonly loading: false;
  readonly success: false;
  readonly error: Error;
}

export type AsyncValue<T> = LoadingValue | SuccessValue<T> | ErrorValue;
