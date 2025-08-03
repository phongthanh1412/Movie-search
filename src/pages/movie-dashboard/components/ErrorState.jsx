import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ErrorState = ({ onRetry, searchQuery }) => {
  return (
    <div className="text-center py-16">
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto mb-6 bg-destructive/10 rounded-full flex items-center justify-center">
          <Icon name="AlertCircle" size={32} className="text-destructive" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">
          Có lỗi xảy ra
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-6">
          Không thể tải kết quả tìm kiếm cho "{searchQuery}". Vui lòng kiểm tra kết nối mạng và thử lại.
        </p>
      </div>

      <div className="space-y-4">
        <Button
          variant="default"
          onClick={onRetry}
          iconName="RefreshCw"
          iconPosition="left"
          iconSize={16}
        >
          Thử lại
        </Button>

        <div className="text-sm text-muted-foreground">
          <p>Nếu vấn đề vẫn tiếp tục, hãy:</p>
          <ul className="mt-2 space-y-1">
            <li>• Kiểm tra kết nối internet</li>
            <li>• Thử tìm kiếm với từ khóa khác</li>
            <li>• Làm mới trang web</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;