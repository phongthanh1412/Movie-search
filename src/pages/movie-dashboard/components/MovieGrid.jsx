import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies, isLoading, onAddToWatchlist, onToggleFavorite }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)]?.map((_, index) => (
          <div key={index} className="bg-card border border-border rounded-xl overflow-hidden animate-pulse">
            <div className="aspect-[2/3] bg-muted"></div>
            <div className="p-4">
              <div className="h-4 bg-muted rounded mb-2"></div>
              <div className="h-3 bg-muted rounded mb-3 w-2/3"></div>
              <div className="h-3 bg-muted rounded mb-2"></div>
              <div className="h-3 bg-muted rounded mb-4 w-3/4"></div>
              <div className="flex space-x-2">
                <div className="h-8 bg-muted rounded flex-1"></div>
                <div className="h-8 bg-muted rounded flex-1"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!movies || movies?.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies?.map((movie) => (
        <MovieCard
          key={movie?.id}
          movie={movie}
          onAddToWatchlist={onAddToWatchlist}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default MovieGrid;