import { apiBaseURL } from "../apiUrls";
import { IComicChapters } from "../models/chapterData";
import { IComicData } from "../models/comicData";

// get the comic's information
export function getComicInfo(slug: string): Promise<IComicData> {
  return fetch(`${apiBaseURL}comic/${slug}/`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error("Error getting comic information", error));
}

// get chapters of a comic
export function getComicChapters(comicHid: string): Promise<IComicChapters> {
  return fetch(`${apiBaseURL}comic/${comicHid}/chapters?limit=20000&lang=en`)
    .then((response) => {
      return response.json();
    })
    .catch((error) =>
      console.error("Error getting chapters of a comic", error)
    );
}
