import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { AlertStyles } from './utils/system';
import { propsOptions } from './utils/options';

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
  size: PropTypes.oneOf(propsOptions.sizes),
  /** button variant */
  variant: PropTypes.oneOf(propsOptions.variants),
};

Alert.defaultProps = {
  outline: false,
  size: 'md',
  variant: 'primary',
};

export default Alert;
