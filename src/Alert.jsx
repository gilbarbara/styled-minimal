import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { AlertStyles } from './utils/system';
import { propsOptions } from './utils/options';

import Enhancer from './Enhancer';

const Content = styled.div`
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  display: flex;
  text-align: ${({ alignHorizontal }) => alignHorizontal};
`;

export const StyledAlert = styled.div`
  ${AlertStyles.base};
`;

const Alert = ({ children, onClick, ...props }) => (
  <StyledAlert {...props} role="alert">
    <Enhancer component={Content} {...props}>{children}</Enhancer>
  </StyledAlert>
);

Alert.propTypes = {
  alignHorizontal: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  /** button size */
  size: PropTypes.oneOf(propsOptions.sizes),
  /** button variant */
  variant: PropTypes.oneOf(propsOptions.variants),
};

Alert.defaultProps = {
  alignHorizontal: 'left',
  outline: false,
  size: 'md',
  variant: 'primary',
};

Alert.Content = Content;

export default Alert;
