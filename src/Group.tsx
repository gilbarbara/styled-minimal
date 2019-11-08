import * as React from 'react';
import styled, { css } from 'styled-components';

import { spacer } from './utils/helpers';
import { baseStyles, sx, system } from './utils/system';

import { GroupProps } from './types';

export const StyledGroup = styled('div')<GroupProps>(
  ({ gap }) => css`
    ${baseStyles};
    align-items: center;
    display: flex;
    flex-wrap: wrap;

    > *:not(:first-child) {
      margin-left: ${spacer(gap!)};
    }
  `,
  sx,
  system,
);

/**
 * Group components with a gap between them
 */
export const Group = React.forwardRef<HTMLDivElement, GroupProps>((props, ref) => (
  <StyledGroup ref={ref} {...props} />
));

Group.defaultProps = {
  gap: 2,
};
