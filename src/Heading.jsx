import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { HeadingStyles } from './utils/system';

export const StyledHeading = styled.h1`
  ${HeadingStyles.base};
`;

const Heading = ({ children, type, ...props }) => (
  <StyledHeading {...props}>{children}</StyledHeading>
);

Heading.propTypes = {
  /** element type */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.node.isRequired,
  gutterBottom: PropTypes.bool,
  /** element size */
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Heading.defaultProps = {
  as: 'h1',
};

export default Heading;
