import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import system from 'system-components';

import { ListStyles } from './utils/system';

export const StyledList = styled(system())`
  ${ListStyles.base};

  > li {
    ${ListStyles.itemPadding}
  
    + li {
      ${ListStyles.itemBorder}
    }
  }
`;

const List = ({ children, ...props }) => (
  <StyledList {...props}>{children}</StyledList>
);

List.propTypes = {
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
  is: PropTypes.oneOf(['ul', 'ol']),
  reversed: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
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
  bordered: false,
  inline: false,
  is: 'ul',
  size: 'md',
  styleType: 'none',
  type: '1',
};

export default List;
