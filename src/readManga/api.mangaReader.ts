import { getImageURL } from "../apiUrls";
import { ISingularChapterMeta } from "../models/chapterData";
import { IMangaImage } from "../models/mangaImageData";

export function getMangaImageURLs(
  chapterData: ISingularChapterMeta
): IMangaImage[] {
  const mangaImages = chapterData?.chapter?.md_images;
  for (const image of mangaImages) {
    image.src = getImageURL(image.b2key);
  }
  return mangaImages;
}
