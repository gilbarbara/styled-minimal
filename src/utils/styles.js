import { css, injectGlobal, keyframes } from 'styled-components';

export function calcUnits(value) {
  const { groups } = value.match(/(?<left>[\d.rem]+) ?(?<operator>[/*+-]) ?(?<right>[\d.rem]+)/);

  if (!groups) {
    return '';
  }

  const left = parseFloat(groups.left);
  const right = parseFloat(groups.right);
  let result;

  switch (groups.operator) {
    case '-':
      result = left - right;
      break;
    case '*':
      result = left * right;
      break;
    case '/':
      result = left / right;
      break;
    case '+':
    default:
      result = left + right;
      break;
  }

  return `${result}rem`;
}

export const dimensions = {
  header: '7rem',
  footer: '4.8rem',
};

export const gutter = '3rem';
export const appEasing = 'cubic-bezier(0.35, 0.01, 0.77, 0.34)';
export const flex = {
  centered: css`
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    text-align: center;
    width: 100%;
  `,
};

export const gridBreakpoints = {
  xs: 0,
  ix: '400px',
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1600px',
};

export const containerMaxWidths = {
  ix: '40rem',
  sm: '54rem',
  md: '72rem',
  lg: '96rem',
  xl: '114rem',
  xxl: '154rem',
};

export const grid = {
  ix: `@media (min-width: ${gridBreakpoints.ix})`,
  sm: `@media (min-width: ${gridBreakpoints.sm})`,
  md: `@media (min-width: ${gridBreakpoints.md})`,
  lg: `@media (min-width: ${gridBreakpoints.lg})`,
  xl: `@media (min-width: ${gridBreakpoints.xl})`,
  xxl: `@media (min-width: ${gridBreakpoints.xxl})`,
};

export const colors = {
  app: '#00b4d5',
  appAlt: '#000809',
  white: '#fff',
  blue: '#007bff',
  cyan: '#17a2b8',
  green: '#28a745',
  indigo: '#6610f2',
  orange: '#fd7e14',
  pink: '#e83e8c',
  purple: '#6f42c1',
  red: '#dc3545',
  teal: '#20c997',
  yellow: '#ffc107',
  black: '#000',
};

export const grays = {
  gray10: '#f8f9fa',
  gray20: '#e9ecef',
  gray30: '#dee2e6',
  gray40: '#ced4da',
  gray50: '#adb5bd',
  gray60: '#6c757d',
  gray70: '#495057',
  gray80: '#343a40',
  gray90: '#212529',
};

export const palette = {
  app: colors.app,
  primary: colors.black,
  secondary: grays.gray60,
  success: colors.green,
  info: colors.cyan,
  warning: colors.yellow,
  danger: colors.red,
  light: grays.gray10,
  dark: grays.gray80,
};

export const fontSizes = {
  xs: '1.2rem',
  sm: '1.4rem',
  md: '1.6rem',
  lg: '1.8rem',
  xl: '2.2rem',
};

export const buttonPadding = {
  xs: '0.8rem 1.6rem',
  sm: '1rem 1.8rem',
  md: '1.2rem 2rem',
  lg: '1.4rem 2.4rem',
  xl: '1.8rem 2.8rem',
};

export const buttonRadius = {
  xs: '0',
  sm: '0',
  md: '0',
  lg: '0',
  xl: '0',
};

const buttonLoaderAnimation = keyframes`
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 5.6rem 0;
  }
`;

export const buttonLoader = css`
  background-image: repeating-linear-gradient(45deg, ${colors.black}, ${colors.black} 2rem, transparent 2rem, transparent 4rem);
  background-size: 5.6rem 5.6rem;
  animation: ${buttonLoaderAnimation} 0.5s linear infinite;
  filter: grayscale(30%);
  pointer-events: none;
  transition: none !important;
`;

injectGlobal`
  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }
  
  body {
    font-size: 16px;
    margin: 0;
    min-height: 100%;
    padding: 0;
  }
  
  img {
    height: auto;
    max-width: 100%;
  }
  
  a {
    text-decoration: none;
  
    &.disabled {
      pointer-events: none;
    }
  }
  
  button {
    
  }
`;
/* eslint-enable no-unused-expression */
