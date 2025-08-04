import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmptyState = ({ searchQuery, onSuggestionClick }) => {
  const suggestions = [
    'Avengers: Endgame',
    'Spider-Man: No Way Home', 
    'The Dark Knight',
    'Inception',
    'Interstellar',
    'Parasite'
  ];

  if (searchQuery) {
    return (
      <div className="text-center py-16">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
            <Icon name="Search" size={32} className="text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No results found!
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            No films were found for the keyword "{searchQuery}". Please try searching with a different keyword.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Suggestions</p>
          <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
            {suggestions?.map((suggestion) => (
              <Button
                key={suggestion}
                variant="outline"
                size="sm"
                onClick={() => onSuggestionClick(suggestion)}
                className="hover:bg-primary hover:text-primary-foreground transition-cinema"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-16">
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
          <Icon name="Film" size={48} className="text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Exploring the world of cinema.
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-lg">
          Search thousands of movies from all over the world. Enter a movie title to start exploring!
        </p>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Most-searched films
          </h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {suggestions?.map((suggestion) => (
              <Button
                key={suggestion}
                variant="outline"
                onClick={() => onSuggestionClick(suggestion)}
                className="hover:bg-primary hover:text-primary-foreground transition-cinema"
                iconName="TrendingUp"
                iconPosition="left"
                iconSize={16}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Search" size={24} className="text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Quick search</h4>
            <p className="text-sm text-muted-foreground">
              Search for films by name with instant results
            </p>
          </div>

          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Star" size={24} className="text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Detailed reviews</h4>
            <p className="text-sm text-muted-foreground">
              View detailed reviews and film information
            </p>
          </div>

          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Bookmark" size={24} className="text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Favorites list</h4>
            <p className="text-sm text-muted-foreground">
              Save films to a list to watch later
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;