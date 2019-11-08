import * as React from 'react';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';
import { baseStyles, pseudoStyles, sx, system } from './utils/system';

import { TextareaProps } from './types';

export const StyledTextarea = styled('textarea').attrs(({ id }) => ({
  id,
}))<TextareaProps>(
  props => {
    const {
      backgroundColor,
      borderColor,
      borderRadius,
      borderWidth,
      color,
      fontSize,
      lineHeight,
      padding,
      validation,
    } = getTheme(props, 'textarea');
    const { size = 'md', valid } = props;

    let currentBorderColor = borderColor;
    if (valid) {
      currentBorderColor = validation.valid;
    } else if (valid === false) {
      currentBorderColor = validation.invalid;
    }

    return css`
      ${baseStyles};
      background-color: ${backgroundColor};
      border: ${`${px(borderWidth)} solid ${currentBorderColor}`};
      border-radius: ${px(borderRadius)};
      color: ${color};
      display: block;
      font-family: inherit;
      font-size: ${px(fontSize[size])};
      line-height: ${lineHeight};
      margin: 0;
      padding: ${px(padding[size])};
      width: 100%;
    `;
  },
  pseudoStyles,
  sx,
  system,
);

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => (
  <StyledTextarea ref={ref} {...props} />
));

Textarea.defaultProps = {
  rows: 3,
  size: 'md',
};
