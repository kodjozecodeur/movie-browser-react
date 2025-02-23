import MovieCard from "../components/MovieCard";
import { useState } from "react";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  //array for movies
  const movies = [
    { id: 1, title: "Fight Club", release_date: "2000" },
    { id: 2, title: "Terminator", release_date: "2013" },
    { id: 3, title: "No country for old men", release_date: "1997" },
    { id: 4, title: "Pulp fiction", release_date: "1999" },
  ];
  //research function
  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searched for
    ${searchQuery}`);
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          name="Search for movies"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}
export default Home;
