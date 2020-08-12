import { ComicList } from 'models/ComicList';
import { EventList } from 'models/EventList';
import { Image } from 'models/Image';
import { SeriesList } from 'models/SeriesList';
import { StoryList } from 'models/StoryList';
import { Url } from 'models/Url';

export interface Character {
  readonly id?: number;
  readonly name?: string;
  readonly description?: string;
  readonly modified?: Date;
  readonly resourceURI?: string;
  readonly urls?: Url[];
  readonly thumbnail?: Image;
  readonly comics?: ComicList[];
  readonly stories?: StoryList[];
  readonly events?: EventList[];
  readonly series?: SeriesList[];
}
