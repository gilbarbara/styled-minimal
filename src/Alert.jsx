import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { AlertStyles, backgroundColor, border, color, defaults, fontFamily, fontSize, lineHeight } from './utils';

import Enhancer from './Enhancer';

const Content = styled.div`
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  display: flex;
  text-align: ${({ alignHorizontal }) => alignHorizontal};
`;

export const StyledAlert = styled.div`
  ${backgroundColor};
  ${border};
  ${AlertStyles.borderRadius};
  ${color};
  ${fontFamily};
  ${fontSize};
  ${lineHeight};
  ${AlertStyles.maxWidth};
  ${AlertStyles.padding};
  width: 100%;
  
  a {
    ${color};
  }
`;

const Alert = ({ children, onClick, ...props }) => (
  <StyledAlert {...props} role="alert">
    <Enhancer component={Content} {...props}>{children}</Enhancer>
  </StyledAlert>
);

Alert.propTypes = {
  alignHorizontal: PropTypes.oneOf(defaults.alignHorizontal),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  /** button size */
  size: PropTypes.oneOf(defaults.sizes),
  /** button variant */
  variant: PropTypes.oneOf(defaults.variants),
};

Alert.defaultProps = {
  alignHorizontal: 'left',
  outline: false,
  size: 'md',
  variant: 'primary',
};

Alert.Content = Content;

export default Alert;
