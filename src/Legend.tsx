import * as React from 'react';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';
import { baseStyles, lineHeightStyles, sx, system } from './utils/system';

import { LegendProps } from './types';

export const StyledLegend = styled('legend')<LegendProps>(
  props => {
    const { color, marginBottom } = getTheme(props, 'legend');

    return css`
      ${baseStyles};
      color: ${color};
      display: block;
      font-family: inherit;
      line-height: ${lineHeightStyles};
      margin-bottom: ${px(marginBottom)};
      white-space: nowrap;
    `;
  },
  sx,
  system,
);

export const Legend = React.forwardRef<HTMLLegendElement, LegendProps>((props, ref) => (
  <StyledLegend ref={ref} {...props} />
));
