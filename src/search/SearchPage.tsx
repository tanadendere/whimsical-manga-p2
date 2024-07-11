import { useEffect, useState } from "react";
import SearchResultCard from "./components/SearchResultCard";
import { search } from "./api.search";
import { IComic } from "../models/comicData";

function SearchPage() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState<IComic[]>([]);

  function handleSearchQueryChanged(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const data = search(input);
      data.then((results) => {
        setSearchResults(results);
      });
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [input]);

  return (
    <>
      <label className="input input-bordered flex items-center gap-2 m-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={input}
          onInput={handleSearchQueryChanged}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="flex flex-col items-center gap-2 m-2">
        {searchResults.map((searchResult) => (
          <SearchResultCard key={searchResult.id} comic={searchResult} />
        ))}
      </div>
    </>
  );
}

export default SearchPage;
