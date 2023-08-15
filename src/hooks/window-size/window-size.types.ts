export interface WindowSize {
  width: number;
  height: number;
}

export interface WindowSizeType {
  windowSize: WindowSize
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}
