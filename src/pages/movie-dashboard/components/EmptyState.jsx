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
            Không tìm thấy kết quả
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Không tìm thấy phim nào với từ khóa "{searchQuery}". Hãy thử tìm kiếm với từ khóa khác.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Gợi ý tìm kiếm:</p>
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
          Khám phá thế giới điện ảnh
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-lg">
          Tìm kiếm hàng ngàn bộ phim từ khắp nơi trên thế giới. Nhập tên phim để bắt đầu khám phá!
        </p>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Phim được tìm kiếm nhiều nhất
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
            <h4 className="font-semibold text-foreground mb-2">Tìm kiếm nhanh</h4>
            <p className="text-sm text-muted-foreground">
              Tìm kiếm phim theo tên với kết quả tức thì
            </p>
          </div>

          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Star" size={24} className="text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Đánh giá chi tiết</h4>
            <p className="text-sm text-muted-foreground">
              Xem đánh giá và thông tin chi tiết về phim
            </p>
          </div>

          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Bookmark" size={24} className="text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Danh sách yêu thích</h4>
            <p className="text-sm text-muted-foreground">
              Lưu phim vào danh sách để xem sau
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;