import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { sizeTypeFull, variantType } from './utils/propTypes';
import { AlertStyles } from './utils/system';

export const StyledAlert = styled.div`
  ${AlertStyles.base};
`;

const Alert = ({ children, ...props }) => (
  <StyledAlert {...props} role="alert">
    {children}
  </StyledAlert>
);

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  outline: PropTypes.bool,
  /** button size */
  size: sizeTypeFull,
  /** button variant */
  variant: variantType,
};

Alert.defaultProps = {
  outline: false,
  size: 'md',
  variant: 'primary',
};

export default Alert;
