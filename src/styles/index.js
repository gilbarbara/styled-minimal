import { css } from 'styled-components';

export * from './alert';
export * from './badge';
export * from './button';
export * from './typography';

/**
 * Base
 */
export const easing = 'cubic-bezier(0.35, 0.01, 0.77, 0.34)';
export const gutter = '32px';
export const gutterHeading = '16px';
export const lineHeight = 1.4;

/**
 * Colors
 */
export const colors = {
  white: '#fff',
  red: '#f44336',
  pink: '#E91E63',
  purple: '#9C27B0',
  indigo: '#3F51B5',
  blue: '#2196F3',
  cyan: '#00BCD4',
  teal: '#009688',
  green: '#4CAF50',
  lime: '#CDDC39',
  yellow: '#FFEB3B',
  amber: '#FFC107',
  orange: '#FF9800',
  brown: '#795548',
  black: '#000',
};

export const grays = {
  gray05: '#f4f4f4',
  gray10: '#e6e6e6',
  gray20: '#ccc',
  gray30: '#b3b3b3',
  gray40: '#999',
  gray50: '#808080',
  gray60: '#666',
  gray70: '#4d4d4d',
  gray80: '#333',
  gray90: '#1a1a1a',
};

export const palette = {
  primary: '#000',
  secondary: '#607D8B',
  success: '#5A9669',
  warning: '#D4AD32',
  danger: '#B85962',
  info: '#2F90A0',
  light: '#f4f4f4',
  dark: '#545454',
};

/**
 * Container
 */
export const containerLayout = {
  fullScreen: css`
    align-items: stretch;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    width: 100%;
  `,
};
export const containerMaxWidth = '1440px';

/**
 * Grid
 */
export const breakpoints = {
  xs: 0,
  ix: '400px',
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1600px',
};

export const grid = {
  ix: `@media (min-width: ${breakpoints.ix})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xxl: `@media (min-width: ${breakpoints.xxl})`,
};
