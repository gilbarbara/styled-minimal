import * as React from 'react';
import styled from 'styled-components';

import { baseStyles, sx, system } from './utils/system';

import { GridProps } from './types';

export const StyledGrid = styled('div')<GridProps>(
  {
    ...baseStyles,
    display: 'grid',
  },
  sx,
  system,
);

export const Grid = React.forwardRef<HTMLDivElement, GridProps>((props, ref) => (
  <StyledGrid ref={ref} {...props} />
));
