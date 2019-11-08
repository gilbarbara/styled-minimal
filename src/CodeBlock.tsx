import * as React from 'react';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';
import { baseStyles, sx, system } from './utils/system';

import { CodeBlockProps } from './types';

export const StyledCodeBlock = styled('pre')<CodeBlockProps>(
  props => {
    const {
      backgroundColor,
      blockColor,
      blockPadding,
      border,
      borderRadius,
      fontFamily,
    } = getTheme(props, 'code');

    return css`
      ${baseStyles};
      background-color: ${backgroundColor};
      border: ${border};
      border-radius: ${px(borderRadius)};
      color: ${blockColor};
      font-family: ${fontFamily};
      line-height: 1.4;
      padding: ${px(blockPadding)};
      white-space: pre;
    `;
  },
  sx,
  system,
);

export const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>((props, ref) => (
  <StyledCodeBlock ref={ref} {...props} />
));
