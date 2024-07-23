import { useEffect, useState } from "react";
import { IComicData } from "../models/comicData";
import { getComicInfo } from "./api.comicInfo";
import { getImageURL } from "../apiUrls";
import { FaRegStar } from "react-icons/fa";
import { FaBookOpenReader, FaStar } from "react-icons/fa6";
import Chapters from "./elements/Chapters";

function MangaDetailsPage({ comicSlug }: { comicSlug: string }) {
  const [comicData, setComicData] = useState<IComicData>();

  useEffect(() => {
    const data = getComicInfo(comicSlug);
    data.then((results) => {
      setComicData(results);
    });
  }, []);

  return (
    <>
      <div className="w-svw flex flex-col gap-3 m-4">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">{comicData?.comic.title}</h1>
          {comicData?.comic.last_chapter ? (
            <div className="flex flex-row gap-1 text-xl">
              <span className="font-bold">{comicData?.comic.last_chapter}</span>
              <span>
                {comicData?.comic.last_chapter > 1 ? "Chapters" : "Chapter"}
              </span>
            </div>
          ) : (
            <div className="flex flex-row gap-1 text-xl"> No Chapters</div>
          )}
        </div>

        <div className="flex flex-col gap-2 items-center">
          <img
            src={getImageURL(comicData?.comic.md_covers[0]?.b2key)}
            alt="Manga Image"
            className="w-52 rounded-md"
          />
          {comicData?.comic.author ? (
            <div className="flex flex-row gap-1 text-xl">
              {comicData?.comic.numAuthors > 1 ? (
                <b>Authors: </b>
              ) : (
                <b>Author: </b>
              )}
              {comicData?.comic.author}
            </div>
          ) : (
            ""
          )}
        </div>

        <button
          className="flex flex-row gap-2 items-center p-3 rounded-md bg-orange-600 text-[white] font-semibold mx-auto"
          type="submit"
        >
          <span>Read</span> <FaBookOpenReader />
        </button>
        <div className="flex justify-evenly h-16 w-5/6 mx-auto text-small bg-slate-200 rounded-md">
          {comicData?.comic.bayesian_rating ? (
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span>{comicData?.comic.bayesian_rating}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <FaRegStar className="text-yellow-400" />
              <span>No rating</span>
            </div>
          )}
          <div className="divider outline outline-[0.5px] my-auto"></div>
          <div className="flex items-center">
            {comicData?.comic.follow_count} Readers
          </div>
          <div className="divider outline outline-[0.5px] my-auto"></div>
          <div className="flex items-center">
            {comicData?.comic.translation_completed
              ? "Completed"
              : "In Progress"}
          </div>
        </div>

        <div className="">
          <h2 className="font-bold">Description</h2>
          <p>{comicData?.comic.desc}</p>
        </div>

        <Chapters
          comicHid={comicData?.comic.hid ?? ""}
          latestChapter={comicData?.comic.last_chapter ?? 0}
        ></Chapters>
      </div>
    </>
  );
}

export default MangaDetailsPage;
