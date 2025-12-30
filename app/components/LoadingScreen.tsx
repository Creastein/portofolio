"use client";

import { useEffect } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function LoadingScreen({ isLoading, onLoadingComplete }: LoadingScreenProps) {
  useEffect(() => {
    if (!isLoading) return;

    // Auto-complete loading after 2.5 seconds
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [isLoading, onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-screen-content">
        {/* Logo with animation */}
        <div className="loading-logo">
          <Image
            src={`${basePath}/images/logo.png`}
            alt="WELLI Logo"
            width={200}
            height={200}
            priority
            className="logo-image"
          />
        </div>

        {/* Progress bar */}
        <div className="loading-progress-container">
          <div className="loading-progress-bar"></div>
        </div>

        {/* Loading text */}
        <div className="loading-text">Loading Experience...</div>
      </div>
    </div>
  );
}
