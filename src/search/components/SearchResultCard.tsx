import { getImageURL } from "../../apiUrls";
import { IComic } from "../../models/comicData";

function SearchResultCard({ comic }: { comic: IComic }) {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-xl">
      <figure>
        <img src={getImageURL(comic.md_covers[0]?.b2key)} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{comic.title}</h2>
        <p>{comic.desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read Now</button>
        </div>
      </div>
    </div>
  );
}

export default SearchResultCard;
