import { css } from 'styled-components';

export * from './buttons';
export * from './functions';
export * from './typography';

/**
 * Base
 */
export const easing = 'cubic-bezier(0.35, 0.01, 0.77, 0.34)';
export const gutter = '32px';
export const gutterHeading = '16px';
export const lineHeight = 1.4;

export const alertBorderRadius = '3px';
export const alertIconGutter = '16px';
export const alertMaxWidth = '450px';
export const alertPadding = {
  xs: '10px 12px',
  sm: '10px 14px',
  md: '10px 16px',
  lg: '10px 18px',
  xl: '10px 20px',
};

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
  primary: colors.black,
  secondary: '#607D8B',
  success: '#5A9669',
  warning: '#D4AD32',
  danger: '#B85962',
  info: '#2F90A0',
  light: grays.gray05,
  dark: grays.gray80,
  ...colors,
};

export const containerLayout = {
  fullScreen: css`
    align-items: stretch;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    text-align: center;
    width: 100%;
  `,
};

export const containerMaxWidths = {
  ix: '400px',
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1540px',
};

/**
 * Grid
 */
export const gridBreakpoints = {
  xs: 0,
  ix: '400px',
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1600px',
};

export const grid = {
  ix: `@media (min-width: ${gridBreakpoints.ix})`,
  sm: `@media (min-width: ${gridBreakpoints.sm})`,
  md: `@media (min-width: ${gridBreakpoints.md})`,
  lg: `@media (min-width: ${gridBreakpoints.lg})`,
  xl: `@media (min-width: ${gridBreakpoints.xl})`,
  xxl: `@media (min-width: ${gridBreakpoints.xxl})`,
};

export const reset = css`
  box-sizing: border-box;
`;
