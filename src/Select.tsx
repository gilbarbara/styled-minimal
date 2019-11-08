import * as React from 'react';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';
import { baseStyles, pseudoStyles, sx, system } from './utils/system';

import { SelectProps } from './types';

export const StyledSelect = styled('select')<SelectProps>(
  props => {
    const { multiple, sizing = 'md', valid } = props;
    const {
      backgroundColor,
      color,
      borderColor,
      borderRadius,
      borderWidth,
      fontSize,
      height,
      lineHeight,
      padding,
      validation,
    } = getTheme(props, 'select');

    const currentBgColor = backgroundColor;
    let currentBorderColor = borderColor;

    if (valid) {
      currentBorderColor = validation.valid;
    } else if (valid === false) {
      currentBorderColor = validation.invalid;
    }

    const multipleCheckedColor = currentBorderColor;

    return css`
      ${baseStyles};
      background-color: ${currentBgColor};
      border: ${px(borderWidth)} solid ${currentBorderColor};
      border-radius: ${px(borderRadius)};
      color: ${color};
      display: block;
      ${!multiple ? `height: ${px(height[sizing])}` : ''};
      font-family: inherit;
      font-size: ${px(fontSize[sizing])};
      line-height: ${lineHeight};
      ${!multiple ? `padding: ${px(padding[sizing])};` : ''};
      white-space: nowrap;
      width: 100%;

      > option {
        background-color: ${currentBgColor};
        color: ${color};
        font-size: ${px(fontSize[sizing])};
        line-height: ${lineHeight};
        padding: ${px(padding[sizing])};
      }

      &[multiple] {
        background-color: ${currentBgColor};

        option:checked {
          background: ${`${multipleCheckedColor} linear-gradient(0deg, ${multipleCheckedColor} 0%, ${multipleCheckedColor} 100%)`};
          font-weight: bold;
        }
      }
    `;
  },
  pseudoStyles,
  sx,
  system,
);

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => (
  <StyledSelect ref={ref} {...props} />
));

Select.defaultProps = {
  sizing: 'md',
};
