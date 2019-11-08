import * as React from 'react';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';
import { baseStyles, sx, system, variantStyles } from './utils/system';

import { BadgeProps } from './types';

export const StyledBadge = styled('sup')<BadgeProps>(
  props => {
    const { dot } = props;
    const { borderRadius, fontSize, fontWeight, lineHeight, padding, size, sizeDot } = getTheme(
      props,
      'badge',
    );

    return css`
      ${baseStyles};
      ${variantStyles};
      border-radius: ${dot ? '100%' : px(borderRadius)};
      display: inline-flex;
      font-size: ${dot ? 0 : px(fontSize)};
      font-weight: ${fontWeight};
      justify-content: center;
      line-height: ${dot ? 0 : px(lineHeight)};
      height: ${px(dot ? sizeDot : size)};
      padding: ${dot ? 0 : `0 ${px(padding)}`};
      min-width: ${px(dot ? sizeDot : size)};
    `;
  },
  sx,
  system,
);

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => (
  <StyledBadge ref={ref} {...props} />
));

Badge.defaultProps = {
  dark: false,
  dot: false,
  invert: false,
  variant: 'primary',
};
