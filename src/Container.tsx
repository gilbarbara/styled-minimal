import * as React from 'react';
import styled, { css } from 'styled-components';

import { responsive, spacer } from './utils/helpers';
import { baseStyles, sx, system } from './utils/system';

import { ContainerProps } from './types';

export const StyledContainer = styled('div')<ContainerProps>(
  props => {
    const { ySpacing, fullScreen } = props;
    let ySpacingStyles;
    let fullScreenStyles;

    if (ySpacing) {
      ySpacingStyles = css`
        padding-bottom: ${spacer(3)};
        padding-top: ${spacer(3)};

        ${responsive({
          lg: {
            paddingBottom: spacer(4)(props),
            paddingTop: spacer(4)(props),
          },
        })};
      `;
    }

    if (fullScreen) {
      fullScreenStyles = css`
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
      `;
    }

    return css`
      ${baseStyles};
      margin-left: auto;
      margin-right: auto;
      padding-left: ${spacer(3)};
      padding-right: ${spacer(3)};
      position: relative;
      width: 100%;
      ${fullScreenStyles};
      ${ySpacingStyles};
      ${responsive({
        lg: {
          paddingLeft: spacer(4)(props),
          paddingRight: spacer(4)(props),
        },
      })};
    `;
  },
  sx,
  system,
);

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>((props, ref) => (
  <StyledContainer ref={ref} {...props} />
));

Container.defaultProps = {
  fullScreen: false,
  ySpacing: false,
};
