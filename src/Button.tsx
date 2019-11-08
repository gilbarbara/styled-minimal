import * as React from 'react';
import styled, { css } from 'styled-components';

import { getColor, getTheme, px } from './utils/helpers';
import { baseStyles, sx, system, variantStyles } from './utils/system';

import { StyledBadge } from './Badge';

import { ButtonProps } from './types';

export const StyledButton = styled('button')<ButtonProps>(
  props => {
    const { block, busy, invert, size = 'md' } = props;
    const { borderRadius, disabledOpacity, fontSize, lineHeight, loader, padding } = getTheme(
      props,
      'button',
    );

    return css`
      ${baseStyles};
      ${variantStyles};
      ${busy ? loader(invert ? '#ccc' : '#fff') : ''};
      align-items: center;
      border-radius: ${px(borderRadius[size])};
      box-shadow: none;
      cursor: pointer;
      display: inline-flex;
      font-family: inherit;
      font-size: ${px(fontSize[size])};
      line-height: ${lineHeight};
      padding: ${px(padding[size][0])} ${px(padding[size][1])};
      text-decoration: none;
      width: ${block ? '100%' : 'auto'};

      &:disabled {
        opacity: ${disabledOpacity};
        pointer-events: none;
      }

      &:focus {
        outline-color: ${getColor};
      }

      ${StyledBadge} {
        margin-left: 5px;
      }
    `;
  },
  sx,
  system,
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <StyledButton ref={ref} {...props} />
));

Button.defaultProps = {
  block: false,
  busy: false,
  dark: false,
  disabled: false,
  invert: false,
  size: 'md',
  type: 'button',
  variant: 'primary',
};
