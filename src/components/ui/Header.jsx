import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';


const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e?.target?.value);
  };

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    if (searchQuery?.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  const handleLogoClick = () => {
    window.location.href = '/movie-search-dashboard';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-cinema border-b border-border">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo Section */}
        <div 
          className="flex items-center cursor-pointer transition-cinema hover:opacity-80"
          onClick={handleLogoClick}
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Film" size={20} color="white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">MovieSearch</span>
              <span className="text-xs text-muted-foreground font-mono">Discover Cinema</span>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex-1 max-w-2xl mx-8">
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className={`relative transition-cinema ${isSearchFocused ? 'transform scale-105' : ''}`}>
              <Icon 
                name="Search" 
                size={20} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
              />
              <input
                type="text"
                placeholder="Search movies, actors, directors..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full h-12 pl-12 pr-12 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-cinema"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-cinema"
                >
                  <Icon name="X" size={16} />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center space-x-4">
          {/* Primary Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary hover:bg-accent/50"
              onClick={() => window.location.href = '/movie-search-dashboard'}
            >
              <Icon name="Home" size={18} className="mr-2" />
              Dashboard
            </Button>
            
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary hover:bg-accent/50"
            >
              <Icon name="TrendingUp" size={18} className="mr-2" />
              Trending
            </Button>
            
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary hover:bg-accent/50"
            >
              <Icon name="Star" size={18} className="mr-2" />
              Favorites
            </Button>
            
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary hover:bg-accent/50"
            >
              <Icon name="Clock" size={18} className="mr-2" />
              Watchlist
            </Button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-2 border-l border-border pl-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              <Icon name="Bell" size={20} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              <Icon name="Settings" size={20} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20"
            >
              <Icon name="User" size={16} color="var(--color-primary)" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-accent/50"
            >
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-border bg-background/95">
        <nav className="flex items-center justify-around py-2 px-4">
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center space-y-1 text-xs text-muted-foreground hover:text-primary"
            onClick={() => window.location.href = '/movie-search-dashboard'}
          >
            <Icon name="Home" size={16} />
            <span>Dashboard</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center space-y-1 text-xs text-muted-foreground hover:text-primary"
          >
            <Icon name="TrendingUp" size={16} />
            <span>Trending</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center space-y-1 text-xs text-muted-foreground hover:text-primary"
          >
            <Icon name="Star" size={16} />
            <span>Favorites</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center space-y-1 text-xs text-muted-foreground hover:text-primary"
          >
            <Icon name="Clock" size={16} />
            <span>Watchlist</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;