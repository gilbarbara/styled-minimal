import * as React from 'react';
import styled, { css } from 'styled-components';

import { baseStyles, lineHeightStyles, sx, system } from './utils/system';

import { TextProps } from './types';

export const StyledText = styled('span')<TextProps>(
  props => css`
    ${baseStyles};
    color: ${props.muted ? '#999' : 'inherit'};
    line-height: ${lineHeightStyles};
  `,
  sx,
  system,
);

export const Text = React.forwardRef<HTMLSpanElement, TextProps>((props, ref) => (
  <StyledText ref={ref} {...props} />
));
