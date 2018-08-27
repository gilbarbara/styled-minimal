import { css, keyframes } from 'styled-components';
import rgba from 'polished/lib/color/rgba';

/**
 * Buttons
 */
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
