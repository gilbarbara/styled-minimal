import { css, keyframes } from 'styled-components';
import { rgba } from './polished';

import { Breakpoints, PlainObject } from '../types';

/**
 * Base
 */
export const breakpoints = ['360px', '400px', '768px', '1024px', '1360px'] as Breakpoints;

/* eslint-disable prefer-destructuring */
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export const fontSizes = [10, 12, 14, 16, 20, 26, 32, 40, 48];
export const lineHeight = 1.4;
export const space = [0, 4, 8, 16, 32, 64, 128];

export const headingSizes = Array(6)
  .fill('')
  .map((_d, i) => i + 1)
  .reduce((acc: PlainObject, d) => {
    acc[`h${d}`] = fontSizes[fontSizes.length - d];
    return acc;
  }, {});

export const headingWeight = 700;

/**
 * Colors
 */
export const darkColor = '#3C3F41';
export const textColor = '#2E2E2E';
export const borderColor = '#ccc';
export const disabledColor = '#ececec';

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
} as const;

export const grays = {
  gray03: '#f7f7f7',
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
} as const;

const baseInput = {
  backgroundColor: '#fff',
  borderColor,
  borderRadius: 2,
  borderWidth: 1,
  color: textColor,
  disabledColor,
  fontSize: {
    sm: 14,
    md: 16,
    lg: 20,
  },
  height: {
    sm: 28,
    md: 34,
    lg: 40,
  },
  lineHeight: 1,
  padding: {
    sm: 6,
    md: 8,
    lg: 10,
  },
  requiredColor: '#999',
  validation: {
    invalid: '#f00',
    valid: '#3ac200',
  },
};

const baseCheckboxAndRadio = {
  backgroundColor: '#f7f8f9',
  sizes: {
    sm: 14,
    md: 16,
    lg: 20,
  },
};

const buttonAnimation = keyframes`
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 56px 0;
  }
`;

const loader = (color = '#fff') => css`
  animation: ${buttonAnimation} 0.5s linear infinite;
  background-image: repeating-linear-gradient(
    45deg,
    ${rgba(color, 0.4)},
    ${rgba(color, 0.4)} 20px,
    transparent 20px,
    transparent 40px
  );
  background-size: 56px 56px;
  pointer-events: none;
  transition: none !important;
`;

/**
 * Components
 */

export const alert = {
  borderRadius: 3,
  maxWidth: 450,
  padding: '10px 12px',
};

export const badge = {
  borderRadius: 10,
  fontSize: 12,
  fontWeight: 700,
  lineHeight: 18,
  padding: 5,
  size: 20,
  sizeDot: 6,
};

export const button = {
  borderRadius: {
    xs: 0,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
  },
  disabledOpacity: 0.7,
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
  },
  lineHeight: 1,
  padding: {
    xs: [4, 8],
    sm: [6, 10],
    md: [8, 14],
    lg: [10, 18],
    xl: [12, 20],
  },
  textTransform: 'none',
  loader,
};

export const checkbox = {
  ...baseCheckboxAndRadio,
  borderRadius: 4,
  borderColor,
  fontSize: baseInput.fontSize,
};

export const code = {
  backgroundColor: '#f7f8f9',
  blockColor: '#676767',
  blockPadding: 8,
  border: '1px solid #e5e5e5',
  borderRadius: 2,
  color: '#ff4444',
  fontFamily: 'Courier, monospace',
  padding: 2,
};

export const form = {
  borderColor,
  borderRadius: 4,
  borderWidth: 1,
  padding: 10,
};

export const formGroup = {
  borderColor,
  borderRadius: 4,
  helpColor: '#999',
  helpMarginTop: space[1],
  inlineMargin: space[2],
  marginBottom: space[3],
  padding: space[2],
};

export const fieldset = {
  borderColor,
  borderRadius: 4,
  color: textColor,
  marginBottom: space[3],
  padding: space[2],
};

export const label = {
  color: textColor,
  inlineFontSize: 14,
  marginBottom: space[2],
};

export const legend = {
  color: textColor,
  marginBottom: space[2],
};

export const list = {
  borderColor,
  borderRadius: 3,
  color: textColor,
  padding: {
    sm: 8,
    md: 12,
    lg: 16,
  },
};

export const input = {
  ...baseInput,
};

export const radio = {
  ...baseCheckboxAndRadio,
  borderRadius: '50%',
  borderColor,
  fontSize: baseInput.fontSize,
};

export const select = {
  ...baseInput,
};

export const textarea = {
  ...baseInput,
  lineHeight: 1.4,
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
