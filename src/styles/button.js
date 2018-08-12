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
  padding: {
    xs: '8px 16px',
    sm: '10px 18px',
    md: '12px 20px',
    lg: '14px 24px',
    xl: '16px 28px',
  },
  borderRadius: {
    xs: '0',
    sm: '0',
    md: '0',
    lg: '0',
    xl: '0',
  },
  disabledOpacity: 0.5,
  lineHeight: 1,
  loader: (color: string = '#fff') => css`
    background-image: repeating-linear-gradient(45deg, ${rgba(color, 0.4)}, ${rgba(color, 0.4)} 20px, transparent 20px, transparent 40px);
    background-size: 56px 56px;
    animation: ${buttonAnimation} 0.5s linear infinite;
    pointer-events: none;
    transition: none !important;
  `,
};
