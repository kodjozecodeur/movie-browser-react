function MovieCard({ movie }) {
  //props movie will be an object
  function onFavoriteClick() {
    alert(`Favorited: ${movie.title}`);
  }
  return (
    <div className="movie-card">
      <div className="movie-poser">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
export default MovieCard;
