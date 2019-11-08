import * as React from 'react';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';
import {
  baseStyles,
  colorStyles,
  lineHeightStyles,
  sx,
  system,
  variantStyles,
} from './utils/system';

import { AlertProps } from './types';

export const StyledAlert = styled('div')<AlertProps>(
  props => {
    const { borderRadius, maxWidth, padding } = getTheme(props, 'alert');

    return css`
      ${baseStyles};
      ${variantStyles};
      border-radius: ${px(borderRadius)};
      font-size: inherit;
      line-height: ${lineHeightStyles};
      max-width: ${px(maxWidth)};
      padding: ${padding};
      width: 100%;

      a {
        ${colorStyles};
      }
    `;
  },
  sx,
  system,
);

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <StyledAlert ref={ref} {...props} />
));

Alert.defaultProps = {
  dark: false,
  invert: false,
  role: 'alert',
  variant: 'primary',
};
