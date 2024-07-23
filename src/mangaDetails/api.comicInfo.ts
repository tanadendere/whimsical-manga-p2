import { apiBaseURL } from "../apiUrls";
import { IComicData } from "../models/comicData";

// get the comic's information
export function getComicInfo(slug: string): Promise<IComicData> {
  return fetch(`${apiBaseURL}comic/${slug}/`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error("Error getting comic information", error));
}
