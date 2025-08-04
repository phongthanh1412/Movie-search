import React from 'react';
import Icon from '../../../components/AppIcon';

const SearchStats = ({ searchQuery, totalResults, searchTime }) => {
  if (!searchQuery || totalResults === 0) {
    return null;
  }

  return (
    <div className="mb-6 flex items-center justify-between bg-card border border-border rounded-lg px-4 py-3">
      <div className="flex items-center space-x-3">
        <Icon name="Search" size={16} className="text-muted-foreground" />
        <div>
          <p className="text-sm text-foreground">
            Found <span className="font-semibold text-primary">{totalResults}</span> result for "{searchQuery}"
          </p>
          {searchTime && (
            <p className="text-xs text-muted-foreground">
              Time: {searchTime}ms
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
        <Icon name="Clock" size={14} />
        <span>Updated: {new Date()?.toLocaleTimeString('vi-VN')}</span>
      </div>
    </div>
  );
};

export default SearchStats;