import {
  ThemeColors,
  ThemeFontSize,
  ThemeMetricsSizes,
  ThemeNavigationColors,
} from '@/Theme/theme.type';

// Colors
export const Colors: ThemeColors = {
  white: '#FFFFFF',
  active: '#AAD6E4',
  link: '#2066a0',
  border: '#dbdbdb',
  text: '#747474',
  primary: '#40C3A5',
  booked: '#6BD2BE',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
};

// FontSize
export const FontSize: ThemeFontSize = {
  small: 16,
  regular: 20,
  large: 40,
};

// Metric Sizes
const tiny = 5;
const small = tiny * 2;
const regular = tiny * 3;
const large = regular * 2;

export const MetricsSizes: ThemeMetricsSizes = {
  tiny,
  small,
  regular,
  large,
};
