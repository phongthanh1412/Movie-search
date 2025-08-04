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
          An Error Occurred
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-6">
          Could not load search results for "{searchQuery}". Please check your network connection and try again.
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
          Try Again
        </Button>

        <div className="text-sm text-muted-foreground">
          <p>If the problem persists, please:</p>
          <ul className="mt-2 space-y-1">
            <li>• Check your internet connection</li>
            <li>• Try searching with a different keyword</li>
            <li>• Refresh the webpage</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;