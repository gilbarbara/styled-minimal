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

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  /** boolean indicating whether the button should render with an animation */
  animate: PropTypes.bool,
  as: PropTypes.string,
  /** match its parent width */
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  /** boolean indicating whether the button should render as disabled */
  disabled: PropTypes.bool,
  /** callback on the click event */
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
