import * as React from 'react';
import styled, { css } from 'styled-components';

import { spacer } from './utils/helpers';
import { baseStyles, sx, system } from './utils/system';

import { ParagraphProps } from './types';

export const StyledParagraph = styled('p')<ParagraphProps>(
  {
    ...baseStyles,
    lineHeight: 1.4,
  },
  () => css`
    margin-bottom: 0;
    margin-top: 0;

    & + & {
      margin-top: ${spacer(2)};
    }
  `,
  sx,
  system,
);

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => (
  <StyledParagraph ref={ref} {...props} />
));
