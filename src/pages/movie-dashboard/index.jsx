import React, { useState, useCallback } from 'react';
import Header from '../../components/ui/Header';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import EmptyState from './components/EmptyState';
import ErrorState from './components/ErrorState';
import SearchStats from './components/SearchStats';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const MovieSearchDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchStats, setSearchStats] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [watchlist, setWatchlist] = useState(new Set());

  // Function to call OMDB API
  const searchOMDBAPI = useCallback(async (query) => {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;
    const startTime = Date.now();

    try {
      // Call search API to get list of movies
      const searchResponse = await fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`);
      const searchData = await searchResponse.json();

      if (searchData.Response === 'False') {
        throw new Error(searchData.Error || 'No movies found');
      }

      // Call detailed API for each movie to get full information
      const detailedMovies = await Promise.all(
        searchData.Search.map(async (movie, index) => {
          const detailResponse = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`);
          const detailData = await detailResponse.json();

          if (detailData.Response === 'False') {
            return null; 
          }

          return {
            id: index + 1, 
            title: detailData.Title,
            year: parseInt(detailData.Year, 10),
            rating: detailData.imdbRating ? parseFloat(detailData.imdbRating) : null,
            genre: detailData.Genre || 'Unknown',
            synopsis: detailData.Plot || 'No description available',
            poster: detailData.Poster !== 'N/A' ? detailData.Poster : 'https://via.placeholder.com/400x600?text=No+Image',
            duration: detailData.Runtime ? parseInt(detailData.Runtime.replace(' min', '')) : null,
            director: detailData.Director || 'Unknown',
            writer: detailData.Writer || 'Unknown',
          };
        })
      );

      // Filter out movies that could not be retrieved
      const filteredMovies = detailedMovies.filter(movie => movie !== null);

      const endTime = Date.now();
      const searchTime = endTime - startTime;

      return {
        movies: filteredMovies,
        totalResults: filteredMovies.length,
        searchTime,
      };
    } catch (err) {
      throw new Error(err.message || 'Error calling API');
    }
  }, []);

  // Handle search function
  const handleSearch = useCallback(async (query) => {
    if (!query?.trim()) {
      setMovies([]);
      setSearchStats(null);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await searchOMDBAPI(query);
      setMovies(result?.movies);
      setSearchStats({
        query,
        totalResults: result?.totalResults,
        searchTime: result?.searchTime,
      });
    } catch (err) {
      setError(err.message || 'An error occurred while searching');
      setMovies([]);
      setSearchStats(null);
    } finally {
      setIsLoading(false);
    }
  }, [searchOMDBAPI]);

  const handleRetry = () => {
    if (searchQuery?.trim()) {
      handleSearch(searchQuery);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
  };

  const handleAddToWatchlist = (movieId) => {
    setWatchlist(prev => {
      const newWatchlist = new Set(prev);
      if (newWatchlist?.has(movieId)) {
        newWatchlist?.delete(movieId);
      } else {
        newWatchlist?.add(movieId);
      }
      return newWatchlist;
    });
  };

  const handleToggleFavorite = (movieId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites?.has(movieId)) {
        newFavorites?.delete(movieId);
      } else {
        newFavorites?.add(movieId);
      }
      return newFavorites;
    });
  };

  const moviesWithStatus = movies?.map(movie => ({
    ...movie,
    isFavorite: favorites?.has(movie?.id),
    isInWatchlist: watchlist?.has(movie?.id),
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Discover your favorite movies
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore thousands of films from all over the world with our intelligent search engine.
              </p>
            </div>
            <SearchBar
              onSearch={handleSearch}
              isLoading={isLoading}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          {searchStats && (
            <SearchStats
              searchQuery={searchStats?.query}
              totalResults={searchStats?.totalResults}
              searchTime={searchStats?.searchTime}
            />
          )}
          <div className="mt-8">
            {error ? (
              <ErrorState onRetry={handleRetry} searchQuery={searchQuery} />
            ) : movies?.length === 0 && !isLoading ? (
              <EmptyState
                searchQuery={searchQuery}
                onSuggestionClick={handleSuggestionClick}
              />
            ) : (
              <MovieGrid
                movies={moviesWithStatus}
                isLoading={isLoading}
                onAddToWatchlist={handleAddToWatchlist}
                onToggleFavorite={handleToggleFavorite}
              />
            )}
          </div>
          {movies?.length > 0 && !isLoading && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Film" size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{movies?.length}</h3>
                <p className="text-sm text-muted-foreground">Found films</p>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <Icon name="Heart" size={24} className="text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{favorites?.size}</h3>
                <p className="text-sm text-muted-foreground">Favorite films</p>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Icon name="Bookmark" size={24} className="text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{watchlist?.size}</h3>
                <p className="text-sm text-muted-foreground">Watch later</p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Button
        variant="default"
        size="icon"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-cinema-lg z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="ArrowUp" size={20} />
      </Button>
    </div>
  );
};

export default MovieSearchDashboard;