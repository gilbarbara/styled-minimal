import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { headingType } from './utils/propTypes';
import { HeadingStyles } from './utils/system';

export const StyledHeading = styled.h1`
  ${HeadingStyles.base};
`;

const Heading = ({ children, type, ...props }) => (
  <StyledHeading {...props}>{children}</StyledHeading>
);

Heading.propTypes = {
  /** element type */
  as: headingType,
  children: PropTypes.node.isRequired,
  gutterBottom: PropTypes.bool,
  /** element size */
  size: headingType,
};

Heading.defaultProps = {
  as: 'h1',
};

export default Heading;
