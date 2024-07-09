import { apiBaseURL } from "../apiUrls";
import { IComic } from "../models/comicData";

export function search(query: string): Promise<IComic[]> {
  return fetch(
    `${apiBaseURL}v1.0/search/?excludes=string&type=comic&page=1&limit=15&showall=false&q=${query}&t=false`
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error("Error in search", error));
}
