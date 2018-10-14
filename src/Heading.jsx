import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withTheme } from './utils/helpers';
import { headingType } from './utils/propTypes';
import { HeadingStyles } from './utils/system';

export const StyledHeading = styled.h1`
  ${HeadingStyles.base};
`;

StyledHeading.propTypes = {
  /** element type */
  as: headingType,
  children: PropTypes.node.isRequired,
  gutterBottom: PropTypes.bool,
  /** element size */
  size: headingType,
};

StyledHeading.defaultProps = {
  as: 'h1',
};

export default withTheme(StyledHeading, 'Heading');
