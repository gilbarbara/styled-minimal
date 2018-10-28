import { css, keyframes } from 'styled-components';
import rgba from 'polished/lib/color/rgba';

/**
 * Base
 */
export const breakpoints = [400, 580, 768, 1024, 1360, 1920];
export const fontSizes = [12, 14, 16, 18, 22, 26, 32, 48];
export const gutter = [4, 8, 16, 32, 64];
export const lineHeight = 1.4;
export const space = [0, 4, 8, 12, 16, 24, 32, 64, 128];

export const componentSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22,
};

export const headingSizes = {
  h1: 40,
  h2: 32,
  h3: 28,
  h4: 24,
  h5: 20,
  h6: 16,
};

export const headingWeight = 700;

/**
 * Grid
 */
export const grid = {
  'xs-only': `@media (min-width: ${breakpoints[0] - 1}px)`,
  ix: `@media (min-width: ${breakpoints[0]}px)`,
  'ix-only': `@media (max-width: ${breakpoints[1] - 1}px)`,
  sm: `@media (min-width: ${breakpoints[1]}px)`,
  'sm-only': `@media (max-width: ${breakpoints[2] - 1}px)`,
  md: `@media (min-width: ${breakpoints[2]}px)`,
  'md-only': `@media (max-width: ${breakpoints[3] - 1}px)`,
  lg: `@media (min-width: ${breakpoints[3]}px)`,
  'lg-only': `@media (max-width: ${breakpoints[4] - 1}px)`,
  xl: `@media (min-width: ${breakpoints[4]}px)`,
  'xl-only': `@media (max-width: ${breakpoints[5] - 1}px)`,
  xxl: `@media (min-width: ${breakpoints[5]}px)`,
  'xxl-only': `@media (max-width: ${breakpoints[6] - 1}px)`,
  xxxl: `@media (min-width: ${breakpoints[6]}px)`,
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

export const darkColor = '#3C3F41';

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
 * Components
 */

export const alert = {
  borderRadius: 3,
  maxWidth: 450,
  padding: {
    xs: [10, 12],
    sm: [10, 14],
    md: [10, 16],
    lg: [10, 18],
    xl: [10, 20],
  },
};

export const badge = {
  borderRadius: 3,
  fontSize: '75%',
  fontWeight: 700,
  padding: [3, 6],
};

/* Button */
const buttonAnimation = keyframes`
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 56px 0;
  }
`;

export const button = {
  borderRadius: {
    xs: 0,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
  },
  disabledOpacity: 0.7,
  lineHeight: 1,
  padding: {
    xs: [4, 12],
    sm: [7, 14],
    md: [9, 16],
    lg: [12, 18],
    xl: [14, 20],
  },
  textTransform: 'none',
  loader: (color: string = '#fff') => css`
    background-image: repeating-linear-gradient(45deg, ${rgba(color, 0.4)}, ${rgba(color, 0.4)} 20px, transparent 20px, transparent 40px);
    background-size: 56px 56px;
    animation: ${buttonAnimation} 0.5s linear infinite;
    pointer-events: none;
    transition: none !important;
  `,
};

/* Container */
export const container = {
  layout: {
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
  },
  maxWidth: 1440,
};

/* Form */
export const form = {
  borderColor: '#ccc',
  borderRadius: 4,
  borderWidth: 1,
  padding: 10,
};

export const formGroup = {
  borderColor: '#ccc',
  borderRadius: 4,
  helpColor: '#999',
  helpMarginTop: gutter[0],
  inlineMargin: gutter[1],
  marginBottom: gutter[2],
  padding: gutter[1],
};

export const fieldset = {
  borderColor: '#ccc',
  borderRadius: 4,
  color: '#343434',
  marginBottom: gutter[2],
  padding: gutter[1],
};

export const label = {
  color: '#343434',
  fontWeight: 'bold',
  inlineFontSize: 14,
  marginBottom: gutter[1],
};

export const legend = {
  color: '#343434',
  fontWeight: 'bold',
  marginBottom: gutter[1],
};

export const input = {
  backgroundColor: '#fff',
  borderColor: '#ccc',
  borderRadius: 2,
  borderWidth: 1,
  color: '#343434',
  focusColor: '#000',
  fontSize: {
    sm: 14,
    md: 16,
    lg: 20,
  },
  height: {
    sm: 28,
    md: 34,
    lg: 42,
  },
  inlineMargin: gutter[1],
  lineHeight: 1,
  lineHeightTextarea: 1.4,
  padding: {
    sm: 6,
    md: 8,
    lg: 10,
  },
  requiredColor: '#000',
  validation: {
    invalid: '#f00',
    valid: '#3ac200',
  },
};

export const select = {
  backgroundColor: '#fff',
  color: '#343434',
  borderColor: '#ccc',
  borderRadius: 2,
  fontSize: {
    sm: 14,
    md: 16,
    lg: 20,
  },
  height: {
    sm: 28,
    md: 34,
    lg: 42,
  },
  lineHeight: 1,
  padding: {
    sm: 6,
    md: 8,
    lg: 10,
  },
};

export const list = {
  borderColor: '#ccc',
  borderRadius: 3,
  color: '#343434',
  padding: {
    sm: 6,
    md: 12,
    lg: 18,
  },
};

export const switchSizes = {
  xs: {
    borderRadius: 7,
    height: 14,
    space: 2,
    width: 24,
  },
  sm: {
    borderRadius: 10,
    height: 20,
    space: 3,
    width: 35,
  },
  md: {
    borderRadius: 14,
    height: 26,
    space: 3,
    width: 47,
  },
  lg: {
    borderRadius: 16,
    height: 32,
    space: 3,
    width: 57,
  },
  xl: {
    borderRadius: 20,
    height: 40,
    space: 3,
    width: 74,
  },
};

export const table = {
  borderColors: { primary: '#ccc', secondary: '#32383e' },
  captionColor: '#ccc',
  captionPadding: 6,
  colors: { primary: '#fff', secondary: '#000' },
  headColors: { light: '#f4f4f4', dark: '#000' },
  padding: {
    sm: 6,
    md: 12,
    lg: 18,
  },
  stripedColors: { primary: '#ededed', secondary: '#262626' },
};
