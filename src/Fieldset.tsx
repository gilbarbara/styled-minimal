import * as React from 'react';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';
import { baseStyles, sx, system } from './utils/system';

import { FieldsetProps } from './types';

import { Legend, StyledLegend } from './Legend';

export const StyledFieldset = styled('fieldset')<FieldsetProps>(
  props => {
    const { borderColor, borderRadius, padding, marginBottom } = getTheme(props, 'fieldset');

    return css`
      ${baseStyles};
      border: 1px solid ${borderColor};
      border-radius: ${px(borderRadius)};
      margin-bottom: ${px(marginBottom)};
      padding: ${px(padding)};
      text-align: left;

      ${StyledLegend} {
        margin: 0;
      }
    `;
  },
  sx,
  system,
);

export const Fieldset = React.forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ children, label, ...rest }: FieldsetProps, ref) => {
    return (
      <StyledFieldset ref={ref} {...rest}>
        {label && <Legend>{label}</Legend>}
        {children}
      </StyledFieldset>
    );
  },
);
