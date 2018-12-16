import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { px, themeGet } from './utils/helpers';
import { sizesPropTypes } from './utils/system';

import Box from './Box';

const styles = (props: Object): string => {
  const { bordered, borderless, inverted } = props;
  const { borderColors, colors } = themeGet(props, 'table');

  return css`
    background-color: ${colors[inverted ? 'secondary' : 'primary']};
    ${bordered && !borderless ? `border: 1px solid ${borderColors[inverted ? 'secondary' : 'primary']};` : ''};
    border-collapse: collapse;
    color: ${colors[inverted ? 'primary' : 'secondary']};
    width: 100%;
  `;
};
const stylesCaption = (props: Object): string => {
  const { captionColor, captionPadding } = themeGet(props, 'table');

  return css`
    caption-side: bottom;
    color: ${captionColor};
    font-size: 90%;
    padding-bottom: ${px(captionPadding)};
    padding-top: ${px(captionPadding)};
    text-align: left;
  `;
};
const stylesCellBorder = (props: Object): string => {
  const { bordered, borderless, inverted } = props;
  const { borderColors } = themeGet(props, 'table');

  if (borderless) {
    return '';
  }

  return css`${bordered ? 'border' : 'border-top'}: 1px solid ${borderColors[inverted ? 'secondary' : 'primary']};`;
};
const stylesHeadBackgroundColor = (props: Object): string => {
  const { head } = props;
  const { headColors } = themeGet(props, 'table');

  return css`background-color: ${headColors[head] || 'transparent'};`;
};
const stylesHeadCellBorder = (props: Object): string => {
  const { bordered, borderless, inverted } = props;
  const { borderColors } = themeGet(props, 'table');
  const colorProp = borderColors[inverted ? 'secondary' : 'primary'];

  if (borderless) {
    return '';
  }

  return css`
    ${bordered ? `border: 1px solid ${colorProp}` : `border-bottom: 2px solid ${colorProp}`};
    ${bordered && 'border-bottom-width: 2px'};
  `;
};
const stylesHeadColor = (props: Object): string => {
  const { head } = props;
  const { colors } = themeGet(props, 'table');

  if (head) {
    return css`color: ${colors[head === 'dark' ? 'primary' : 'secondary']};`;
  }

  return '';
};
const stylesPadding = (props: Object): string => {
  const { size } = props;
  const { padding } = themeGet(props, 'table');

  return css`padding: ${px(padding[size])};`;
};
const stylesStriped = (props: Object): string => {
  const { inverted, striped } = props;
  const { stripedColors } = themeGet(props, 'table');

  if (striped) {
    return css`background-color: ${stripedColors[inverted ? 'secondary' : 'primary']};`;
  }

  return '';
};

export const Table = styled(Box)`
  ${styles};
  
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

Table.displayName = 'Table';

Table.propTypes = {
  as: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  children: PropTypes.node.isRequired,
  head: PropTypes.oneOf(['light', 'dark']),
  inverted: PropTypes.bool,
  size: sizesPropTypes,
  striped: PropTypes.bool,
  ...Box.propTypes,
};

Table.defaultProps = {
  as: 'table',
  bordered: false,
  borderless: false,
  inverted: false,
  size: 'md',
  striped: false,
};

export default Table;
