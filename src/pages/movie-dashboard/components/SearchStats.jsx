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
            Tìm thấy <span className="font-semibold text-primary">{totalResults}</span> kết quả cho "{searchQuery}"
          </p>
          {searchTime && (
            <p className="text-xs text-muted-foreground">
              Thời gian tìm kiếm: {searchTime}ms
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
        <Icon name="Clock" size={14} />
        <span>Cập nhật: {new Date()?.toLocaleTimeString('vi-VN')}</span>
      </div>
    </div>
  );
};

export default SearchStats;