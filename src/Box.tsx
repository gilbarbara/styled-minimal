import * as React from 'react';
import styled from 'styled-components';

import { baseStyles, sx, system } from './utils/system';

import { BoxProps } from './types';

export const StyledBox = styled('div')<BoxProps>(baseStyles, sx, system);

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <StyledBox ref={ref} {...props} />
));
