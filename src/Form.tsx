import * as React from 'react';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';
import { baseStyles, sx, system } from './utils/system';

import { FormProps } from './types';

export const StyledForm = styled('form')<FormProps>(
  props => {
    const { frame } = props;
    const { borderColor, borderRadius, padding } = getTheme(props, 'form');

    return css`
      ${baseStyles};
      ${frame ? `border: 1px solid ${borderColor};` : ''}
      ${frame ? `border-radius: ${px(borderRadius)};` : ''}
      ${frame ? `padding: ${px(padding)};` : ''}
    `;
  },
  sx,
  system,
);

export const Form = React.forwardRef<HTMLFormElement, FormProps>((props, ref) => (
  <StyledForm ref={ref} {...props} />
));

Form.defaultProps = {
  frame: false,
  method: 'get',
};
