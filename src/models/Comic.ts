import { Image } from './Image';

export interface Comic {
  readonly id?: number;
  readonly title?: string;
  readonly thumbnail?: Image;
}
