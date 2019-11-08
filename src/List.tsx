import * as React from 'react';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';
import { baseStyles, sx, system } from './utils/system';

import { DLProps, OLProps, ULProps } from './types';

const stylesItem = (props: any) => {
  const { size = 'md' } = props;
  const { padding } = getTheme(props, 'list');

  return css`
    padding: ${px(padding[size])};
  `;
};

const stylesDD = (props: any) => {
  const { size = 'md' } = props;
  const { padding } = getTheme(props, 'list');

  return css`
    margin-left: ${px(padding[size])};
    padding: 0 ${px(padding[size])} ${px(padding[size])} 0;
  `;
};

const stylesSibling = (props: any) => {
  const { frame } = props;
  const { borderColor } = getTheme(props, 'list');

  if (!frame) {
    return undefined;
  }

  return css`
    border-top: 1px solid ${borderColor};
  `;
};

const stylesChildren = (props: any) => {
  const { as, frame, inline, styleType } = props;
  const { borderColor } = getTheme(props, 'list');
  const border = `1px solid ${borderColor}`;

  if (as === 'dl') {
    return css`
      dt {
        font-weight: 700;
        ${stylesItem}
        ${frame && inline && `border-bottom: ${border};`};
        ${frame && inline && `border-right: ${border};`};
        ${inline && `flex-basis: 30%;`};
      }

      dd {
        ${stylesDD};
        ${frame && inline && `border-bottom: ${border};`};
        ${inline && stylesItem};
        ${inline && `flex-basis: 70%;`};
        ${inline && `margin-left: 0;`};

        + dt {
          ${!inline && stylesSibling};
        }

        &:last-of-type {
          ${inline && `border-bottom: 0;`};
        }
      }

      dt:last-of-type {
        ${inline && `border-bottom: 0;`};
      }
    `;
  }

  return css`
    > li {
      ${frame && (as === 'ol' || styleType !== 'none' || inline) && `border-left: ${border};`};
      ${inline && 'flex: 1'};
      line-height: 1.2;
      ${stylesItem}

      + li {
        ${stylesSibling}
      }
    }
  `;
};

export const StyledList = styled('ul')<any>(
  props => {
    const { as, frame, inline, styleType } = props;
    const { borderColor, borderRadius } = getTheme(props, 'list');
    const border = `1px solid ${borderColor}`;

    return css`
      ${baseStyles};
      ${frame && `border: ${border}`};
      ${frame && `border-radius: ${px(borderRadius)}`};
      display: flex;
      flex-direction: ${inline ? 'row' : 'column'};
      flex-wrap: ${as === 'dl' && inline ? 'wrap' : 'nowrap'};
      margin: 0;
      ${as === 'ul' && styleType === 'none' ? 'padding: 0;' : ''};
      ${as === 'ul' ? `list-style-type: ${styleType};` : ''};

      ${stylesChildren};
    `;
  },
  sx,
  system,
);

export const DL = React.forwardRef<HTMLDListElement, DLProps>((props, ref) => (
  <StyledList as="dl" ref={ref} {...props} />
));

DL.defaultProps = {
  frame: true,
  inline: false,
  size: 'md',
};

export const OL = React.forwardRef<HTMLOListElement, OLProps>((props, ref) => (
  <StyledList as="ol" ref={ref} {...props} />
));

OL.defaultProps = {
  frame: false,
  inline: false,
  size: 'md',
};

export const UL = React.forwardRef<HTMLUListElement, ULProps>((props, ref) => (
  <StyledList as="ul" ref={ref} {...props} />
));

UL.defaultProps = {
  frame: true,
  inline: false,
  size: 'md',
  styleType: 'none',
};
