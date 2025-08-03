import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch, isLoading, searchQuery, setSearchQuery }) => {
  const [isFocused, setIsFocused] = useState(false);

  // Debounced search effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery?.trim()) {
        onSearch(searchQuery);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  const handleClear = () => {
    setSearchQuery('');
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (searchQuery?.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <div className={`relative transition-cinema ${isFocused ? 'transform scale-[1.02]' : ''}`}>
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            {isLoading ? (
              <div className="animate-spin">
                <Icon name="Loader2" size={20} className="text-primary" />
              </div>
            ) : (
              <Icon name="Search" size={20} className="text-muted-foreground" />
            )}
          </div>
          
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full h-14 pl-12 pr-16 bg-card border-2 border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-cinema text-lg shadow-cinema"
            disabled={isLoading}
          />
          
          {searchQuery && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleClear}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg"
            >
              <Icon name="X" size={18} />
            </Button>
          )}
        </div>
      </form>
      {/* Search suggestions */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {['Avengers', 'Spider-Man', 'Batman', 'Star Wars', 'Harry Potter']?.map((suggestion) => (
          <Button
            key={suggestion}
            variant="outline"
            size="sm"
            onClick={() => setSearchQuery(suggestion)}
            className="text-xs hover:bg-primary hover:text-primary-foreground transition-cinema"
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;