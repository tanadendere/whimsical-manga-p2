import { useEffect, useState } from "react";
import { IComicChapters } from "../../models/chapterData";
import { getComicChapters } from "../api.comicInfo";
import { getRefinedComicChapters } from "../utilities";

function Chapters({
  comicHid,
  latestChapter,
}: {
  comicHid: string;
  latestChapter: number;
}) {
  const [mangaChapters, setMangaChapters] = useState<IComicChapters>();

  useEffect(() => {
    const data = getComicChapters(comicHid);
    data.then((results) => {
      setMangaChapters(results);
    });
  }, []);

  if (mangaChapters) {
    const comicChapters = getRefinedComicChapters(
      Number(latestChapter),
      mangaChapters
    );

    return (
      <>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl">Chapters</h1>
          <span className="flex gap-1 mb-2">
            <img
              className="size-6"
              src="https://flagsapi.com/GB/flat/64.png"
              alt="Great Britain logo"
            ></img>
            <h3 className="text-sm">in English</h3>
          </span>
          {comicChapters.map((chapter) => (
            <button className="flex truncate max-w-full">
              {`Chapter ${chapter.chap}${
                chapter.title ? ": " + chapter.title : ""
              }`}
            </button>
          ))}
        </div>
      </>
    );
  }
}

export default Chapters;
