import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';
import { sizesPropTypes } from './utils/system';

import Box, { basePropTypes } from './Box';

const styles = props => {
  const { bordered, borderless, inverted } = props;
  const { borderColors, colors } = getTheme(props, 'table');

  return css`
    background-color: ${colors[inverted ? 'secondary' : 'primary']};
    ${bordered && !borderless
      ? `border: 1px solid ${borderColors[inverted ? 'secondary' : 'primary']};`
      : ''};
    border-collapse: collapse;
    color: ${colors[inverted ? 'primary' : 'secondary']};
    width: 100%;
  `;
};
const stylesCaption = props => {
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
const stylesCellBorder = props => {
  const { bordered, borderless, inverted } = props;
  const { borderColors } = getTheme(props, 'table');

  if (borderless) {
    return '';
  }

  return css`
    ${bordered ? 'border' : 'border-top'}: 1px solid
      ${borderColors[inverted ? 'secondary' : 'primary']};
  `;
};
const stylesHeadBackgroundColor = props => {
  const { head } = props;
  const { headColors } = getTheme(props, 'table');

  return css`
    background-color: ${headColors[head] || 'transparent'};
  `;
};
const stylesHeadCellBorder = props => {
  const { bordered, borderless, inverted } = props;
  const { borderColors } = getTheme(props, 'table');
  const colorProp = borderColors[inverted ? 'secondary' : 'primary'];

  if (borderless) {
    return '';
  }

  return css`
    ${bordered ? `border: 1px solid ${colorProp}` : `border-bottom: 2px solid ${colorProp}`};
    ${bordered && 'border-bottom-width: 2px'};
  `;
};
const stylesHeadColor = props => {
  const { head } = props;
  const { colors } = getTheme(props, 'table');

  if (head) {
    return css`
      color: ${colors[head === 'dark' ? 'primary' : 'secondary']};
    `;
  }

  return '';
};
const stylesPadding = props => {
  const { size } = props;
  const { padding } = getTheme(props, 'table');

  return css`
    padding: ${px(padding[size])};
  `;
};
const stylesStriped = props => {
  const { inverted, striped } = props;
  const { stripedColors } = getTheme(props, 'table');

  if (striped) {
    return css`
      background-color: ${stripedColors[inverted ? 'secondary' : 'primary']};
    `;
  }

  return '';
};

const Table = styled(Box)`
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
  ...basePropTypes,
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
