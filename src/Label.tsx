import * as React from 'react';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';
import { baseStyles, lineHeightStyles, sx, system } from './utils/system';

import { LabelProps } from './types';

export const StyledLabel = styled('label')<LabelProps>(
  props => {
    const { inline } = props;
    const { color, inlineFontSize, marginBottom } = getTheme(props, 'label');

    return css`
      ${baseStyles};
      align-items: center;
      color: ${color};
      cursor: pointer;
      display: flex;
      font-family: inherit;
      ${inline ? `font-size: ${px(inlineFontSize)}` : ''};
      line-height: ${lineHeightStyles};
      ${!inline ? `margin-bottom: ${px(marginBottom)}` : ''};
      white-space: nowrap;
    `;
  },
  sx,
  system,
);

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => (
  <StyledLabel ref={ref} {...props} />
));

Label.defaultProps = {
  inline: false,
};
