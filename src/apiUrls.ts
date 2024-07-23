export const apiBaseURL = "https://api.comick.fun/";

export function getImageURL(b2key: string | undefined): string {
  if (b2key) {
    return `https://meo3.comick.pictures/${b2key}`;
  }
  return "https://placehold.co/600x400";
}
