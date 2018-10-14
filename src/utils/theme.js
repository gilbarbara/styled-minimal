import { css, keyframes } from 'styled-components';
import rgba from 'polished/lib/color/rgba';

/**
 * Base
 */
export const breakpoints = [400, 560, 768, 1024, 1360, 1920];
export const fontSizes = [12, 14, 16, 18, 22, 26, 32, 48];
export const gutter = [4, 8, 16, 32];
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
  h1: '40px',
  h2: '32px',
  h3: '28px',
  h4: '24px',
  h5: '20px',
  h6: '16px',
};

export const headingWeight = '700';

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
  borderRadius: '3px',
  iconGutter: '16px',
  maxWidth: '450px',
  padding: {
    xs: '10px 12px',
    sm: '10px 14px',
    md: '10px 16px',
    lg: '10px 18px',
    xl: '10px 20px',
  },
};

export const badge = {
  borderRadius: '3px',
  fontSize: '75%',
  fontWeight: 700,
  padding: '3px 6px',
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
    xs: '0',
    sm: '0',
    md: '0',
    lg: '0',
    xl: '0',
  },
  disabledOpacity: 0.5,
  lineHeight: 1,
  padding: {
    xs: '4px 12px',
    sm: '7px 14px',
    md: '9px 16px',
    lg: '12px 18px',
    xl: '14px 20px',
  },
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
  maxWidth: '1440px',
};

/* Form */
export const form = {
  backgroundColor: '#fff',
  borderColor: '#ccc',
  borderRadius: '4px',
  borderWidth: '1px',
  padding: '10px',
};

export const formGroup = {
  backgroundColor: '#fff',
  borderColor: '#ccc',
  borderRadius: '4px',
  helpColor: '#999',
  helpMarginTop: '4px',
  inlineMargin: '12px',
  marginBottom: '10px',
  padding: '10px',
};

export const fieldset = {
  backgroundColor: '#fff',
  borderColor: '#ccc',
  borderRadius: '4px',
  color: '#343434',
  marginBottom: '10px',
  padding: '10px',
};

export const label = {
  color: '#343434',
  fontWeight: 'bold',
  inlineFontSize: '14px',
  marginBottom: '8px',
};

export const legend = {
  color: '#343434',
  fontWeight: 'bold',
  inlineFontSize: '14px',
  marginBottom: '8px',
};

export const input = {
  backgroundColor: '#fff',
  borderColor: '#ccc',
  borderRadius: '2px',
  borderWidth: '1px',
  color: '#343434',
  focusColor: '#000',
  fontSize: {
    sm: '14px',
    md: '16px',
    lg: '20px',
  },
  height: {
    sm: '28px',
    md: '34px',
    lg: '42px',
  },
  inlineMargin: '8px',
  lineHeight: 1,
  lineHeightTextarea: 1.4,
  padding: {
    sm: '6px',
    md: '8px',
    lg: '10px',
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
  borderRadius: '2px',
  fontSize: {
    sm: '14px',
    md: '16px',
    lg: '20px',
  },
  height: {
    sm: '28px',
    md: '34px',
    lg: '42px',
  },
  lineHeight: 1,
  padding: {
    sm: '6px',
    md: '8px',
    lg: '10px',
  },
};

export const list = {
  borderColor: '#ccc',
  borderRadius: '3px',
  color: '#343434',
  padding: {
    sm: '6px',
    md: '12px',
    lg: '18px',
  },
};

export const switchSizes = {
  xs: {
    borderRadius: '7px',
    height: '14px',
    space: '2px',
    width: '24px',
  },
  sm: {
    borderRadius: '10px',
    height: '20px',
    space: '3px',
    width: '35px',
  },
  md: {
    borderRadius: '14px',
    height: '26px',
    space: '3px',
    width: '47px',
  },
  lg: {
    borderRadius: '16px',
    height: '32px',
    space: '3px',
    width: '57px',
  },
  xl: {
    borderRadius: '20px',
    height: '40px',
    space: '3px',
    width: '74px',
  },
};

export const table = {
  borderColors: { primary: '#ccc', secondary: '#32383e' },
  captionColor: '#ccc',
  captionPadding: '6px',
  colors: { primary: '#fff', secondary: '#000' },
  headColors: { light: '#f4f4f4', dark: '#000' },
  padding: {
    sm: '6px',
    md: '12px',
    lg: '18px',
  },
  stripedColors: { primary: '#ededed', secondary: '#262626' },
};
