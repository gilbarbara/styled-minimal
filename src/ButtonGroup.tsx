import * as React from 'react';
import styled, { css } from 'styled-components';

import { baseStyles, sx, system } from './utils/system';

import { ButtonGroupProps } from './types';

export const StyledButtonGroup = styled('div')<Partial<ButtonGroupProps>>(
  () => css`
    ${baseStyles};
    display: inline-flex;

    > button {
      + button {
        margin-left: -1px;
      }

      &:first-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }

      &:last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }

      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }
  `,
  sx,
  system,
);

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, size, variant, ...rest }: ButtonGroupProps, ref) => {
    const buttonProps = {
      size,
      variant,
    };

    return (
      <StyledButtonGroup ref={ref} {...rest}>
        {React.Children.map(children, child =>
          React.cloneElement(child as React.ReactElement, { ...buttonProps }),
        )}
      </StyledButtonGroup>
    );
  },
);

ButtonGroup.defaultProps = {
  size: 'md',
  variant: 'primary',
};
