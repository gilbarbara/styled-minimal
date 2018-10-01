import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ListStyles } from './utils/system';
import { sizeType } from './utils/types';

export const StyledList = styled.ul`
  ${ListStyles.base};

  > li {
    ${ListStyles.item}
  
    + li {
      ${ListStyles.itemSibling}
    }
  }
`;

const List = ({ children, ...props }) => (
  <StyledList {...props}>{children}</StyledList>
);

List.propTypes = {
  /** element type */
  as: PropTypes.oneOf(['ul', 'ol']),
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
  reversed: PropTypes.bool,
  size: sizeType,
  start: PropTypes.number,
  styleType: PropTypes.oneOfType([
    PropTypes.oneOf([
      'disc',
      'circle',
      'square',
      'decimal',
      'lower-alpha',
      'none',
    ]),
    PropTypes.string,
  ]),
  type: PropTypes.oneOf(['1', 'a', 'A', 'i', 'I']),
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
