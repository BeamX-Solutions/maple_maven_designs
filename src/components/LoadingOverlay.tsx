import React from 'react';

const LoadingOverlay: React.FC<{ loading: boolean }> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 transition-opacity duration-500">
      <img
        src="/logo34.png"
        alt="Loading..."
        className="w-24 h-24 animate-pulse"
      />
    </div>
  );
};

export default LoadingOverlay;