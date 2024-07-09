import SearchBar from "./components/SearchBar";
import SearchResultCard from "./components/SearchResultCard";

const searchResults = ["", "", "", ""];

function SearchPage() {
  return (
    <>
      <SearchBar />
      <div className="flex flex-col items-center gap-2 m-2">
        {searchResults.map((searchResult) => (
          // remember to add a key
          <SearchResultCard searchResult={searchResult} />
        ))}
      </div>
    </>
  );
}

export default SearchPage;
