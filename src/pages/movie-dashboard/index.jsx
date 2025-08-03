import React, { useState, useCallback, useEffect } from 'react';
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

  // Mock movie data
  const mockMovies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      year: 2019,
      rating: 8.4,
      genre: "Hành động, Phiêu lưu, Khoa học viễn tưởng",
      synopsis: `Sau những sự kiện tàn khốc của Avengers: Infinity War, vũ trụ đang trong tình trạng hỗn loạn.\nVới sự giúp đỡ của các đồng minh còn lại, các Avengers phải tập hợp một lần nữa để đảo ngược hành động của Thanos và khôi phục lại trật tự vũ trụ.`,
      poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
      duration: 181,
      director: "Anthony và Joe Russo"
    },
    {
      id: 2,
      title: "Spider-Man: No Way Home",
      year: 2021,
      rating: 8.2,
      genre: "Hành động, Phiêu lưu, Khoa học viễn tưởng",
      synopsis: `Lần đầu tiên trong lịch sử điện ảnh của Spider-Man, danh tính của Người Nhện thân thiện được tiết lộ.\nPeter Parker không còn có thể tách biệt cuộc sống bình thường và trách nhiệm siêu anh hùng của mình.`,
      poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
      duration: 148,
      director: "Jon Watts"
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      genre: "Hành động, Tội phạm, Chính kịch",
      synopsis: `Khi mối đe dọa được gọi là Joker tàn phá và gây hỗn loạn cho người dân Gotham.\nBatman phải chấp nhận một trong những thử thách tâm lý và thể chất lớn nhất để chống lại sự bất công.`,
      poster: "https://images.unsplash.com/photo-1509347528160-9329d33b2588?w=400&h=600&fit=crop",
      duration: 152,
      director: "Christopher Nolan"
    },
    {
      id: 4,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      genre: "Hành động, Khoa học viễn tưởng, Thriller",
      synopsis: `Dom Cobb là một tên trộm lành nghề, người giỏi nhất trong nghệ thuật trích xuất nguy hiểm.\nAnh ta ăn cắp những bí mật có giá trị từ tiềm thức sâu thẳm trong lúc mọi người đang mơ.`,
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      duration: 148,
      director: "Christopher Nolan"
    },
    {
      id: 5,
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
      genre: "Phiêu lưu, Chính kịch, Khoa học viễn tưởng",
      synopsis: `Trái đất trong tương lai đang dần trở nên không thể sinh sống được.\nMột nhóm nhà thám hiểm phải du hành qua một lỗ sâu gần Sao Thổ để tìm kiếm một ngôi nhà mới cho nhân loại.`,
      poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop",
      duration: 169,
      director: "Christopher Nolan"
    },
    {
      id: 6,
      title: "Parasite",
      year: 2019,
      rating: 8.5,
      genre: "Hài kịch, Chính kịch, Thriller",
      synopsis: `Gia đình Ki-taek sống trong một căn hầm bán ngầm ẩm thấp.\nHọ bắt đầu làm việc cho gia đình giàu có Park và dần dần xâm nhập vào cuộc sống của họ.`,
      poster: "https://images.unsplash.com/photo-1489599162406-0a8c42be0e22?w=400&h=600&fit=crop",
      duration: 132,
      director: "Bong Joon-ho"
    },
    {
      id: 7,
      title: "The Matrix",
      year: 1999,
      rating: 8.7,
      genre: "Hành động, Khoa học viễn tưởng",
      synopsis: `Một hacker máy tính học được từ những người nổi loạn bí ẩn về bản chất thực sự của thực tế của mình.\nVà vai trò của anh ta trong cuộc chiến chống lại những kẻ kiểm soát nó.`,
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      duration: 136,
      director: "Lana và Lilly Wachowski"
    },
    {
      id: 8,
      title: "Pulp Fiction",
      year: 1994,
      rating: 8.9,
      genre: "Tội phạm, Chính kịch",
      synopsis: `Cuộc sống của hai sát thủ đám đông, một võ sĩ quyền anh, vợ của một ông trùm tội phạm.\nVà một cặp cướp nhà hàng đan xen trong bốn câu chuyện về bạo lực và cứu chuộc.`,
      poster: "https://images.unsplash.com/photo-1489599162406-0a8c42be0e22?w=400&h=600&fit=crop",
      duration: 154,
      director: "Quentin Tarantino"
    }
  ];

  // Mock API search function
  const mockSearchAPI = useCallback(async (query) => {
    const startTime = Date.now();
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Filter movies based on search query
    const filteredMovies = mockMovies?.filter(movie =>
      movie?.title?.toLowerCase()?.includes(query?.toLowerCase()) ||
      movie?.genre?.toLowerCase()?.includes(query?.toLowerCase()) ||
      movie?.director?.toLowerCase()?.includes(query?.toLowerCase())
    );

    const endTime = Date.now();
    const searchTime = endTime - startTime;

    return {
      movies: filteredMovies,
      totalResults: filteredMovies?.length,
      searchTime
    };
  }, []);

  // Handle search
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
      const result = await mockSearchAPI(query);
      setMovies(result?.movies);
      setSearchStats({
        query,
        totalResults: result?.totalResults,
        searchTime: result?.searchTime
      });
    } catch (err) {
      setError(err?.message || 'Có lỗi xảy ra khi tìm kiếm');
      setMovies([]);
      setSearchStats(null);
    } finally {
      setIsLoading(false);
    }
  }, [mockSearchAPI]);

  // Handle retry
  const handleRetry = () => {
    if (searchQuery?.trim()) {
      handleSearch(searchQuery);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
  };

  // Handle add to watchlist
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

  // Handle toggle favorite
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

  // Add favorite and watchlist status to movies
  const moviesWithStatus = movies?.map(movie => ({
    ...movie,
    isFavorite: favorites?.has(movie?.id),
    isInWatchlist: watchlist?.has(movie?.id)
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center py-12">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Discover your favorite movies
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore thousands of films from all over the world with our intelligent search engine.
              </p>
            </div>

            {/* Search Bar */}
            <SearchBar
              onSearch={handleSearch}
              isLoading={isLoading}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          {/* Search Stats */}
          {searchStats && (
            <SearchStats
              searchQuery={searchStats?.query}
              totalResults={searchStats?.totalResults}
              searchTime={searchStats?.searchTime}
            />
          )}

          {/* Content Area */}
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

          {/* Quick Stats */}
          {movies?.length > 0 && !isLoading && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Film" size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{movies?.length}</h3>
                <p className="text-sm text-muted-foreground">Phim tìm thấy</p>
              </div>

              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <Icon name="Heart" size={24} className="text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{favorites?.size}</h3>
                <p className="text-sm text-muted-foreground">Phim yêu thích</p>
              </div>

              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Icon name="Bookmark" size={24} className="text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{watchlist?.size}</h3>
                <p className="text-sm text-muted-foreground">Danh sách xem</p>
              </div>
            </div>
          )}
        </div>
      </main>
      {/* Scroll to top button */}
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