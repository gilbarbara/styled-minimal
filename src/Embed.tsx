import * as React from 'react';
import styled, { css } from 'styled-components';

import { baseStyles, sx, system } from './utils/system';

import { EmbedProps } from './types';

export const StyledEmbed = styled('div')<Omit<EmbedProps, 'children'>>(
  props => {
    const { ratio } = props;

    return css`
      ${baseStyles};
      height: 0;
      overflow: hidden;
      padding-bottom: ${`${ratio! * 100}%`};
      position: relative;
      width: 100%;

      & > iframe {
        border: 0;
        bottom: 0;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    `;
  },
  sx,
  system,
);

export const Embed = React.forwardRef<HTMLDivElement, EmbedProps>(({ children, ...rest }, ref) => (
  <StyledEmbed ref={ref} dangerouslySetInnerHTML={{ __html: children }} {...rest} />
));

Embed.defaultProps = {
  ratio: 9 / 16,
};
