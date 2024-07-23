import { IMangaImage } from "./mangaImageData";

export interface IComicChapters {
  chapters: IChapter[];
  total: number;
  limit: number;
}

export interface IChapter {
  id: number;
  chap: string;
  title?: string;
  vol?: number;
  lang: string;
  is_the_last_chapter: boolean;
  group_name: string[];
  hid: string;
}

export interface ISingularChapterMeta {
  chapter: ISingularChapter;
  next?: IChapter;
  prev?: IChapter;
  matureContent: boolean;
  chapTitle: string;
}

export interface ISingularChapter {
  id: number;
  chap: string;
  vol?: number;
  title?: string;
  hid: string;
  group_name: string[];
  chapter_id?: number;
  created_at: string;
  updated_at: string;
  crawled_at: string;
  mdid?: number;
  comment_count: number;
  up_count: number;
  down_count: number;
  status: string;
  adsense: boolean;
  lang: string;
  is_the_last_chapter: boolean;
  md_images: IMangaImage[];
}
