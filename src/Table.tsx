import * as React from 'react';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';
import { baseStyles, sx, system } from './utils/system';

import { TableProps } from './types';

const stylesCaption = (props: TableProps) => {
  const { captionColor, captionPadding } = getTheme(props, 'table');

  return css`
    caption-side: bottom;
    color: ${captionColor};
    font-size: 90%;
    padding-bottom: ${px(captionPadding)};
    padding-top: ${px(captionPadding)};
    text-align: left;
  `;
};
const stylesCellBorder = (props: TableProps) => {
  const { frame, clean, dark } = props;
  const { borderColors } = getTheme(props, 'table');

  if (clean) {
    return '';
  }

  return css`
    ${frame ? 'border' : 'border-top'}: 1px solid ${borderColors[dark ? 'secondary' : 'primary']};
  `;
};
const stylesHeadBackgroundColor = (props: TableProps) => {
  const { head } = props;
  const { headColors } = getTheme(props, 'table');

  return css`
    background-color: ${headColors[head!] || 'transparent'};
  `;
};
const stylesHeadCellBorder = (props: TableProps) => {
  const { frame, clean, dark } = props;
  const { borderColors } = getTheme(props, 'table');
  const colorProp = borderColors[dark ? 'secondary' : 'primary'];

  if (clean) {
    return '';
  }

  return css`
    ${frame ? `border: 1px solid ${colorProp}` : `border-bottom: 2px solid ${colorProp}`};
    ${frame && 'border-bottom-width: 2px'};
  `;
};
const stylesHeadColor = (props: TableProps) => {
  const { head } = props;
  const { colors } = getTheme(props, 'table');

  if (head !== 'normal') {
    return css`
      color: ${colors[head === 'dark' ? 'primary' : 'secondary']};
    `;
  }

  return '';
};
const stylesPadding = (props: TableProps) => {
  const { size = 'md' } = props;
  const { padding } = getTheme(props, 'table');

  return css`
    padding: ${px(padding[size])};
  `;
};
const stylesStriped = (props: TableProps) => {
  const { dark, striped } = props;
  const { stripedColors } = getTheme(props, 'table');

  if (striped) {
    return css`
      background-color: ${stripedColors[dark ? 'secondary' : 'primary']};
    `;
  }

  return '';
};

export const StyledTable = styled('table')<TableProps>(
  props => {
    const { frame, clean, dark } = props;
    const { borderColors, colors } = getTheme(props, 'table');

    return css`
      ${baseStyles};
      background-color: ${colors[dark ? 'secondary' : 'primary']};
      ${frame && !clean
        ? `border: 1px solid ${borderColors[dark ? 'secondary' : 'primary']};`
        : ''};
      border-collapse: collapse;
      color: ${colors[dark ? 'primary' : 'secondary']};
      width: 100%;

      th {
        text-align: inherit;
      }

      th,
      td {
        ${stylesCellBorder};
        ${stylesPadding};
        vertical-align: top;
      }

      thead {
        ${stylesHeadBackgroundColor};
        ${stylesHeadColor};
      }

      thead th {
        ${stylesHeadCellBorder};
        vertical-align: bottom;
      }

      tbody tr:nth-of-type(odd) {
        ${stylesStriped};
      }

      caption {
        ${stylesCaption};
      }
    `;
  },
  sx,
  system,
);

export const Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => (
  <StyledTable ref={ref} {...props} />
));

Table.defaultProps = {
  frame: false,
  clean: false,
  dark: false,
  head: 'normal',
  size: 'md',
  striped: false,
};
