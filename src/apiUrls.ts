export const apiBaseURL = "https://api.comick.io/";

export function getImageURL(b2key: string): string {
  return `https://meo3.comick.pictures/${b2key}`;
}
