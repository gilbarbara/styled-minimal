import * as React from 'react';
import styled from 'styled-components';

import { baseStyles, sx, system } from './utils/system';

import { ImageProps } from './types';

export const StyledImage = styled('img')<any>(
  {
    ...baseStyles,
    maxWidth: '100%',
  },
  sx,
  system,
);

export const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => (
  <StyledImage ref={ref} {...props} />
));
