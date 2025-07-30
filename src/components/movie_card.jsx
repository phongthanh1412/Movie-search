const MovieCard = ({ movie }) => {
  return (
    <div>
      <h2>{movie.Title}</h2>
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
        alt={movie.Title}
      />
      <p>
        Type: {movie.Type} | Year: {movie.Year}
      </p>
    </div>
  );
};

export default MovieCard;