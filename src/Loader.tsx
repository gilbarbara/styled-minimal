import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { getColor, px } from './utils/helpers';
import { sx, system } from './utils/system';

import { LoaderProps } from './types';

const bounce = keyframes`
  0%, 100% { 
    transform: scale(0);
  }
  50% { 
    transform: scale(1);
  }
`;

export const StyledLoader = styled('div')<LoaderProps>(
  props => {
    const { color, delay, opacity, size, speed } = props;

    return css`
      box-sizing: border-box;
      height: ${px(size!)};
      position: relative;
      width: ${px(size!)};

      > div {
        animation: ${bounce} ${speed}s infinite ease-in-out;
        background-color: ${getColor};
        ${color && `background-color: ${color}`};
        border-radius: 50%;
        height: 100%;
        left: 0;
        opacity: ${opacity};
        position: absolute;
        top: 0;
        width: 100%;

        &:last-of-type {
          animation-delay: -${delay || speed! / 2}s;
        }
      }
    `;
  },
  sx,
  system,
);

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>((props, ref) => (
  <StyledLoader ref={ref} {...props}>
    <div />
    <div />
  </StyledLoader>
));

Loader.defaultProps = {
  opacity: 0.7,
  size: 32,
  speed: 2,
  variant: 'primary',
};
