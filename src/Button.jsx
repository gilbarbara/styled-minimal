import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { buttonType, sizeTypeFull, variantType } from './utils/propTypes';
import { ButtonStyles } from './utils/system';

import { StyledBadge } from './Badge';

export const StyledButton = styled.button`
  ${ButtonStyles.base};
  
  &:disabled {
    pointer-events: none;
  }
  
  &:hover {
    transition: transform 0.2s;
    transform: scale(1.05);
  }
  
  &:focus {  
      ${ButtonStyles.outlineColor};
  }
  
  ${StyledBadge} {
    margin-left: 5px;
  }
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

Button.propTypes = {
  animate: PropTypes.bool,
  as: PropTypes.string,
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  size: sizeTypeFull,
  type: buttonType,
  variant: variantType,
};

Button.defaultProps = {
  animate: false,
  block: false,
  disabled: false,
  outline: false,
  size: 'md',
  type: 'button',
  variant: 'primary',
};

export default Button;
