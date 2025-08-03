import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MovieCard = ({ movie, onAddToWatchlist, onToggleFavorite }) => {
  const {
    id,
    title,
    year,
    rating,
    genre,
    synopsis,
    poster,
    duration,
    director,
    isFavorite = false,
    isInWatchlist = false
  } = movie;

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-cinema hover:shadow-cinema-lg transition-cinema group">
      {/* Poster Image */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={poster}
          alt={`Poster phim ${title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-cinema"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-cinema flex items-center justify-center">
          <div className="flex space-x-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={() => onToggleFavorite(id)}
              className="bg-background/90 hover:bg-background"
            >
              <Icon 
                name={isFavorite ? "Heart" : "Heart"} 
                size={18} 
                className={isFavorite ? "text-red-500 fill-current" : "text-foreground"} 
              />
            </Button>
            
            <Button
              variant="secondary"
              size="icon"
              onClick={() => onAddToWatchlist(id)}
              className="bg-background/90 hover:bg-background"
            >
              <Icon 
                name={isInWatchlist ? "BookmarkCheck" : "Bookmark"} 
                size={18} 
                className={isInWatchlist ? "text-primary" : "text-foreground"} 
              />
            </Button>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
          <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
          <span className="text-white text-sm font-medium">{rating}</span>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-foreground line-clamp-1 mb-1">
            {title}
          </h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{year}</span>
            <span>{duration} phút</span>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Film" size={14} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{genre}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="User" size={14} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Đạo diễn: {director}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {synopsis}
        </p>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            iconName="Play"
            iconPosition="left"
            iconSize={16}
          >
            Xem trailer
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            iconName="Info"
            iconPosition="left"
            iconSize={16}
          >
            Chi tiết
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;