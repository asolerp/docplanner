import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type StyleType = TextStyle & ViewStyle & ImageStyle;

export type ThemeColors = {[key: string]: string};
export type ThemeNavigationColors = {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
};

export type ThemeFontSize = {[key: string]: number};
export type ThemeMetricsSizes = {[key: string]: number | string};

export type ThemeVariables = {
  Colors: ThemeColors;
  NavigationColors: ThemeNavigationColors;
  FontSize: ThemeFontSize;
  MetricsSizes: ThemeMetricsSizes;
};

export type ThemeFonts = {[key: string]: TextStyle};
export type ThemeLayout = {[key: string]: StyleType};
export type ThemeGutters = {[key: string]: StyleType};

export type Theme = {
  Colors: ThemeColors;
  Fonts: ThemeFonts;
  Gutters: ThemeGutters;
  NavigationColors: ThemeNavigationColors;
  FontSize: ThemeFontSize;
  MetricsSizes: ThemeMetricsSizes;
  Layout: ThemeLayout;
  Variables?: Partial<ThemeVariables>;
};
