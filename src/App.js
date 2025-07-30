import { useEffect, useState } from 'react';
import MovieCard from './components/movie_card'; 
// import SearchIcon from './search.svg';
import './App.css';

const API_URL = process.env.REACT_APP_MOVIES_API_URL || '';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const searchMovies = async (title) => {
    if (!title.trim()) return;
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovieList(data.Search || []);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchMovies(searchQuery);
    }
  };

  useEffect(() => {
    searchMovies('Pokemon');
  }, []);

  return (
    <div className="app">
      <h1>MOVIES</h1>
      <div className="search">
        <input
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        {/* <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchQuery)}
        /> */}
      </div>
      <div className="container">
        {movieList.length > 0 ? (
          movieList.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;