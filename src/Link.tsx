import * as React from 'react';
import styled, { css } from 'styled-components';

import { getColor, getDimmerColor } from './utils/helpers';
import { baseStyles, sx, system } from './utils/system';

import { LinkProps } from './types';

export const StyledLink = styled('a')<LinkProps>(
  props => {
    const color = getColor(props);

    return css`
      ${baseStyles};
      align-items: center;
      color: ${color};
      display: inline-flex;

      &:visited {
        color: ${getDimmerColor(color)};
      }
    `;
  },
  sx,
  system,
);

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <StyledLink ref={ref} {...props} />
));

Link.defaultProps = {
  variant: 'primary',
};
