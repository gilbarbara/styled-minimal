import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import system from 'system-components';

import { HeadingStyles } from './utils/system';

export const StyledHeading = styled(system())`
  ${HeadingStyles.base};
`;

const Heading = ({ children, type, ...props }) => (
  <StyledHeading {...props}>{children}</StyledHeading>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  gutterBottom: PropTypes.bool,
  /** element type */
  is: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /** element size */
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Heading.defaultProps = {
  is: 'h1',
};

export default Heading;
