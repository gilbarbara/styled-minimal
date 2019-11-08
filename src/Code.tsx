import * as React from 'react';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';
import { baseStyles, sx, system } from './utils/system';

import { CodeProps } from './types';

export const StyledCode = styled('code')<CodeProps>(
  props => {
    const { backgroundColor, border, borderRadius, color, fontFamily, padding } = getTheme(
      props,
      'code',
    );

    return css`
      ${baseStyles};
      background-color: ${backgroundColor};
      border: ${border};
      border-radius: ${px(borderRadius)};
      color: ${color};
      font-family: ${fontFamily};
      line-height: 1;
      padding: ${px(padding)};
    `;
  },
  sx,
  system,
);

export const Code = React.forwardRef<HTMLElement, CodeProps>((props, ref) => (
  <StyledCode ref={ref} {...props} />
));
