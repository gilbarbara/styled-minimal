import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getTheme, isDefined, px } from './utils/helpers';
import { sizesPropTypes } from './utils/system';

import Box, { basePropTypes } from './Box';

const styles = props => {
  const { as, bordered, inline, m, styleType } = props;
  const { borderColor, borderRadius } = getTheme(props, 'list');

  return css`
    ${bordered ? `border: 1px solid ${borderColor};` : ''};
    ${bordered ? `border-radius: ${px(borderRadius)};` : ''};
    display: flex;
    flex-direction: ${inline ? 'row' : 'column'};
    margin: ${isDefined(m) ? m : 0};
    ${as === 'ul' && styleType === 'none' ? 'padding: 0;' : ''};
    ${as === 'ul' ? `list-style-type: ${styleType};` : ''};
  `;
};
const stylesItem = props => {
  const { bordered, size } = props;
  const { padding } = getTheme(props, 'list');

  return css`
    padding: ${bordered ? px(padding[size]) : 0};
  `;
};

const stylesSibling = props => {
  const { bordered, size } = props;
  const { borderColor, padding } = getTheme(props, 'list');

  return css`
    border-top: ${bordered ? `1px solid ${borderColor}` : 'none'};
    margin-top: ${!bordered ? px(padding[size]) : 0};
  `;
};

const List = styled(Box)`
  ${styles};

  > li {
    ${stylesItem}

    + li {
      ${stylesSibling}
    }
  }
`;

List.displayName = 'List';

List.propTypes = {
  /** element type */
  as: PropTypes.oneOf(['ul', 'ol']),
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
  reversed: PropTypes.bool,
  size: sizesPropTypes,
  start: PropTypes.number,
  styleType: PropTypes.oneOfType([
    PropTypes.oneOf(['disc', 'circle', 'square', 'decimal', 'lower-alpha', 'none']),
    PropTypes.string,
  ]),
  type: PropTypes.oneOf(['1', 'a', 'A', 'i', 'I']),
  ...basePropTypes,
};

List.defaultProps = {
  as: 'ul',
  bordered: false,
  inline: false,
  size: 'md',
  styleType: 'none',
  type: '1',
};

export default List;
