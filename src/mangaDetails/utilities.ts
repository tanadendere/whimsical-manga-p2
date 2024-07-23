import { IComicChapters, IChapter } from "../models/chapterData";

export function getRefinedComicChapters(
  latestChapter: number,
  rawComicChapters: IComicChapters
): IChapter[] {
  const comicChapters: IChapter[] = rawComicChapters?.chapters;
  const refinedComicChapters: IChapter[] = [];

  let chapterCount = latestChapter;
  for (const chapter of comicChapters) {
    if (Number(chapter.chap) === chapterCount) {
      refinedComicChapters.push(chapter);
      chapterCount--;
    }
  }
  return refinedComicChapters;
}
