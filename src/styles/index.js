import { css } from 'styled-components';

export * from './alert';
export * from './badge';
export * from './button';
export * from './form';
export * from './list';
export * from './switch';
export * from './table';
export * from './typography';

/**
 * Base
 */
export const gutter = ['8px', '16px', '32px'];
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
  primary: '#2E2E2E',
  secondary: '#4B515D',
  success: '#00C851',
  warning: '#fda509',
  danger: '#ff4444',
  info: '#33b5e5',
  light: '#f4f4f4',
  dark: '#212121',
};

/**
 * Container
 */
export const containerLayout = {
  flex: css`
    align-items: stretch;
    display: flex;
    justify-content: flex-start;

    > * {
      flex: 1 1 auto;
    }
  `,
  fullScreen: css`
    align-items: stretch;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
  `,
};
export const containerMaxWidth = '1440px';

/**
 * Grid
 */
export const breakpoints = {
  xs: 0,
  ix: 400,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1600,
};

export const grid = {
  'xs-only': `@media (min-width: ${breakpoints.ix - 1}px)`,
  ix: `@media (min-width: ${breakpoints.ix}px)`,
  'ix-only': `@media (max-width: ${breakpoints.sm - 1}px)`,
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  'sm-only': `@media (max-width: ${breakpoints.md - 1}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  'md-only': `@media (max-width: ${breakpoints.lg - 1}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  'lg-only': `@media (max-width: ${breakpoints.xl - 1}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,
  'xl-only': `@media (max-width: ${breakpoints.xxl - 1}px)`,
  xxl: `@media (min-width: ${breakpoints.xxl}px)`,
};
