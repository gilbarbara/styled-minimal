import * as React from 'react';
import styled, { css } from 'styled-components';

import { getTheme, px, spacer } from './utils/helpers';
import { baseStyles, sx, system } from './utils/system';

import { HeadingProps } from './types';

export const StyledHeading = styled('h1')<HeadingProps>(
  props => {
    const { as, level, gutter } = props;
    const headingWeight = getTheme(props, 'headingWeight');
    const marginBottom = gutter ? spacer(3) : 0;
    let headingSize = getTheme(props, 'headingSizes')[as!];

    if (level) {
      headingSize = getTheme(props, 'headingSizes')[`h${level}`];
    }

    return css`
      ${baseStyles};
      font-size: ${px(headingSize)};
      font-family: inherit;
      font-weight: ${headingWeight};
      line-height: 1;
      margin-bottom: ${marginBottom};
      margin-top: ${spacer(2)};

      &:first-child {
        margin-top: ${0};
      }
    `;
  },
  sx,
  system,
);

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
  <StyledHeading ref={ref} {...props} />
));

Heading.defaultProps = {
  as: 'h1',
  gutter: false,
};
