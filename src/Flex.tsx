import * as React from 'react';
import styled from 'styled-components';

import { baseStyles, sx, system } from './utils/system';

import { FlexProps } from './types';

export const StyledFlex = styled('div')<FlexProps>(
  {
    ...baseStyles,
    display: 'flex',
  },
  sx,
  system,
);

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => (
  <StyledFlex ref={ref} {...props} />
));
